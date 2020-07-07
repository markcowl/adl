import { items, length } from '@azure-tools/linq';
import { isReference, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { StructureKind, ts, TypeParameterDeclarationStructure } from 'ts-morph';
import { getResponseType } from '../../../model/http/operation';
import { createTypeAlias } from '../../../model/schema/alias';
import { HeaderTypeReference, ResponseTypeReference, TypeReference } from '../../../model/schema/type';
import { assert } from '../../../support/assert';
import { TypeSyntax } from '../../../support/codegen';
import { processHeader } from './header';
import { processSchema } from './schema';
import { Context } from './serializer';

export type ResponseOptions = { isAnonymous: false } | ({ isAnonymous: true } & AnonymousResponseOptions);
export type AnonymousResponseOptions = { operation: v3.Operation; code: string }

export async function processResponse(response: v3.Response | v3.ResponseReference, $: Context, options: ResponseOptions = { isAnonymous: false }): Promise<ResponseTypeReference> {
  const here = $.normalizeReference(refTo(response)).$ref;
  const responseRef = $.visitor.references.response.get(here);
  if (responseRef) {
    return responseRef;
  }

  const impl = async () => {
    if (isReference(response)) {
      let responseRef = $.visitor.references.response.get($.normalizeReference(response.$ref).$ref);
      if (!responseRef) {
        const resolvedReference = await $.resolveReference(response.$ref);
        responseRef = await processResponse(resolvedReference.node, resolvedReference.context);
      }

      assert(options.isAnonymous);
      return specializeResponse(responseRef, options);
    }

    const name = options?.isAnonymous ? anonymous('response') : nameOf(response);
    const responseRef = await getResponseTypeReference(response, $, options);
    return createTypeAlias($.api, name, responseRef, { summary: options.isAnonymous ? undefined : response.description });
  };

  const result = await impl();
  $.visitor.references.response.set(here, result);
  return result;
}

async function getResponseTypeReference(response: v3.Response, $: Context, options: ResponseOptions): Promise<ResponseTypeReference> {
  const responses = new Array<ts.TypeNode>();
  const content = response.content ?? [];

  const types = new Array<ts.TypeNode>();
  let typeParameters: Array<TypeParameterDeclarationStructure> | undefined = undefined;
  const requiredReferences = new Array<TypeReference>();

  if (!options.isAnonymous) {
    typeParameters = [
      { kind: StructureKind.TypeParameter, name: 'Code', default: 'undefined' },
      { kind: StructureKind.TypeParameter, name: 'IsException', default: 'false' },
    ];
  }

  if (length(response.content) == 0) {
    types.push(await getIndividualResponseTypeNode(response, undefined, undefined, $, options));
  } else {
    for (const [key, value] of items(response.content)) {
      const schema = value.schema ? await processSchema(value.schema, $, { isAnonymous: true }) : undefined;
      const type = await getIndividualResponseTypeNode(response, schema, key, $, options);
      types.push(type);
      if (schema) {
        requiredReferences.push(...schema.requiredReferences);
      }
    }
  }

  const type = types.length == 1 ? types[0] : ts.createTupleTypeNode(types);
  return {
    declaration: new TypeSyntax(type),
    requiredReferences,
    typeParameters,
    description: options?.isAnonymous ? response.description : undefined,
    code: options?.isAnonymous ? options.code : undefined,
  };
}

async function getIndividualResponseTypeNode(response: v3.Response, schema: TypeReference | undefined, mediaType: string | undefined, $: Context, options: ResponseOptions): Promise<ts.TypeNode> {
  const headers = await processResponseHeaders(response, $);

  let code: string | ts.TypeNode;
  let isException: boolean | ts.TypeNode;

  if (options.isAnonymous) {
    [code, isException] = getResponseTypeArguments(options);
  } else {
    code = ts.createTypeReferenceNode('Code', undefined);
    isException = ts.createTypeReferenceNode('IsException', undefined);
  }

  return getResponseType(code, isException, mediaType, schema, headers);

}

function getResponseTypeArguments(options: AnonymousResponseOptions): [string, boolean] {
  const operation = options.operation;
  const code = options.code;
  const isException = code == 'default' || code.startsWith('4') || code.startsWith('5');
  return [code, isException];
}

async function processResponseHeaders(response: v3.Response, $: Context) {
  const headers = new Array<HeaderTypeReference>();
  for (const [key, value] of items(response.headers)) {
    const h = await processHeader(value, $, { isAnonymous: true, wireName: key });
    headers.push(h);
  }
  return headers;
}

function specializeResponse(responseRef: ResponseTypeReference, options: AnonymousResponseOptions): ResponseTypeReference {
  const [code, isException] = getResponseTypeArguments(options);

  const args: Array<ts.TypeNode> = [
    ts.createLiteralTypeNode(ts.createStringLiteral(code)),
    ts.createLiteralTypeNode(ts.createLiteral(isException)),
  ];

  const type = <ts.TypeReferenceNode>responseRef.declaration.node;
  const specializedType = ts.createTypeReferenceNode(type.typeName, args);
  return {
    ...responseRef,
    typeParameters: undefined,
    declaration: new TypeSyntax(specializedType),
  };
}


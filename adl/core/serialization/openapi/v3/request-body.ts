import { items } from '@azure-tools/linq';
import { isReference, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { ts } from 'ts-morph';
import { createTypeAlias } from '../../../model/schema/alias';
import { RequestBodyTypeReference, TypeReference } from '../../../model/schema/type';
import { TypeSyntax } from '../../../support/codegen';
import { processSchema } from './schema';
import { Context } from './serializer';

export async function processRequestBody(requestBody: v3.RequestBody | v3.RequestBodyReference, $: Context, options?: { isAnonymous?: boolean }): Promise<RequestBodyTypeReference> {
  const here = $.normalizeReference(refTo(requestBody)).$ref;
  const requestBodyRef = $.visitor.references.parameter.get(here);
  if (requestBodyRef) {
    return requestBodyRef;
  }

  const impl = async () => {
    if (isReference(requestBody)) {
      let requestBodyRef = $.visitor.references.requestBody.get($.normalizeReference(requestBody.$ref).$ref);
      if (!requestBodyRef) {
        const resolvedReference = await $.resolveReference(requestBody.$ref);
        requestBodyRef = await processRequestBody(resolvedReference.node, resolvedReference.context);
      }
      return requestBodyRef;
    }

    const requests = new Array<ts.TypeNode>();
    const requiredReferences = new Array<TypeReference>();

    for (const [mediaType, type] of items(requestBody.content)) {
      const typeref = await processSchema(type.schema, $, { isAnonymous: true });
      const request = ts.createTypeReferenceNode(
        'Body', [
          typeref.declaration.node,
          ts.createLiteralTypeNode(ts.createStringLiteral(mediaType)),
        ]);
      requests.push(request);
      requiredReferences.push(...typeref.requiredReferences);
    }

    const requestBodyRef: RequestBodyTypeReference = {
      declaration: new TypeSyntax(ts.createUnionTypeNode(requests)),
      requiredReferences,
      description: options?.isAnonymous ? requestBody.description : undefined,
      required: requestBody.required ?? false,
    };

    const requestBodyTypeName = options?.isAnonymous ? anonymous('parameter') : nameOf(requestBody);
    return createTypeAlias(
      $.api,
      requestBodyTypeName,
      requestBodyRef, {
        summary: !options?.isAnonymous ? requestBody.description : undefined
      });
  };

  const result = await impl();
  $.visitor.references.requestBody.set(here, result);
  return result;
}

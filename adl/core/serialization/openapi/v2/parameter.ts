import { isReference, v2 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { StructureKind, ts, TypeParameterDeclarationStructure } from 'ts-morph';
import { createTypeAlias } from '../../../model/schema/alias';
import { ParameterTypeReference, SchemaTypeReference } from '../../../model/schema/type';
import { normalizeIdentifier, TypeSyntax } from '../../../support/codegen';
import { processSchema } from './schema';
import { Context } from './serializer';

export interface ParameterOptions {
  isAnonymous?: boolean;
  operation?: v2.Operation;
}

export async function processParameter(parameter: v2.Parameter | v2.ParameterReference, $: Context, options?: ParameterOptions): Promise<ParameterTypeReference> {
  const here = $.normalizeReference(refTo(parameter)).$ref;
  const parameterRef = $.visitor.references.parameter.get(here);
  if (parameterRef) {
    return parameterRef;
  }

  const impl = async () => {
    if (isReference(parameter)) {
      let parameterRef = $.visitor.references.parameter.get($.normalizeReference(parameter.$ref).$ref);
      if (!parameterRef) {
        const resolvedReference = await $.resolveReference(parameter.$ref);
        parameterRef = await processParameter(resolvedReference.node, resolvedReference.context);
      }

      return specializeWithMediaType(parameterRef, $, options);
    }

    const parameterTypeName = options?.isAnonymous ? anonymous('parameter') : nameOf(parameter);
    const schemaSource = (parameter.in == v2.ParameterLocation.Body) ? (<v2.BodyParameter>parameter).schema : <v2.Schema>parameter;
    const schema = await processSchema(schemaSource, $, { isAnonymous: true });
    const parameterRef = getParameterReference(parameter, schema, $, options);

    return createTypeAlias(
      $.api,
      parameterTypeName,
      parameterRef, {
        summary: !options?.isAnonymous ? parameter.description : undefined,
      });
  };

  const result = await impl();
  $.visitor.references.parameter.set(here, result);
  return result;
}

export function getParameterReference(parameter: v2.Parameter, schema: SchemaTypeReference, $: Context, options?: ParameterOptions): ParameterTypeReference {
  const syntax = getParameterSyntax(parameter, schema, $, options);

  return {
    name: parameter.name,
    description: options?.isAnonymous ? parameter.description : undefined,
    required: parameter.required ?? false,
    declaration: syntax.type,
    typeParameters: syntax.typeParameters,
    requiredReferences: schema.requiredReferences,
    location: parameter.in,
  };
}

interface GenericTypeSyntax {
  type: TypeSyntax;
  typeParameters?: Array<TypeParameterDeclarationStructure>;
}

function getParameterSyntax(parameter: v2.Parameter, schema: SchemaTypeReference, $: Context, options?: ParameterOptions): GenericTypeSyntax {
  const getTypeNode = () => {
    switch (parameter.in) {
      case v2.ParameterLocation.Path:
        return getPathParameterTypeNode(<v2.PathParameter>parameter, schema, $, options);
      case v2.ParameterLocation.FormData:
        return getFormDataParameterTypeNode(<v2.FormDataParameter>parameter, schema, $, options);
      case v2.ParameterLocation.Query:
        return getQueryParameterTypeNode(<v2.QueryParameter>parameter, schema, $, options);
      case v2.ParameterLocation.Header:
        return getHeaderParameterTypeNode(<v2.HeaderParameter>parameter, schema, $, options);
      case v2.ParameterLocation.Body:
        return getBodyParameterTypeNode(<v2.BodyParameter>parameter, schema, $, options);
    }
    throw $.error(`unknown parameter location '${parameter.in}'`, parameter);
  };

  let typeParameters: Array<TypeParameterDeclarationStructure> | undefined = undefined;
  if (parameter.in == v2.ParameterLocation.Body && !options?.isAnonymous) {
    typeParameters = [{
      kind: StructureKind.TypeParameter,
      name: 'MediaType',
      default: 'undefined'
    }];
  }

  return {
    type: new TypeSyntax(getTypeNode()),
    typeParameters
  };
}

function getParameterTypeNode(
  parameterType: string,
  parameter: v2.Parameter,
  schema: SchemaTypeReference,
  options?: ParameterOptions,
  mediaTypeArguments?: Array<ts.TypeNode>,
) {
  const hasSafeParameterName = normalizeIdentifier(parameter.name) == parameter.name;

  if (options?.isAnonymous && parameterType == 'Path' && hasSafeParameterName) {
    // common case of inline path parameter with safe name is represented as the
    // underlying schema type for brevity
    return schema.declaration.node;
  }

  const args =  [schema.declaration.node];

  if (mediaTypeArguments) {
    args.push(...mediaTypeArguments);
  }

  if ((!options?.isAnonymous || !hasSafeParameterName) && parameterType != 'Body') {
    // inline case with safe parameter name does not repeat the parameter name
    // as type arg. Body parameters don't send their name over the wire so omit
    // this always for them. Conveniently, this eliminates ambiguity with optional
    // media type argument.
    args.push(ts.createLiteralTypeNode(ts.createStringLiteral(parameter.name)));
  }

  return ts.createTypeReferenceNode(parameterType, args);
}

function getBodyParameterTypeNode(parameter: v2.BodyParameter, schema: SchemaTypeReference, $: Context, options?: ParameterOptions): ts.TypeNode {
  if (options?.isAnonymous) {
    return getParameterTypeNode('Body', parameter, schema, options, getMediaTypeArguments($, options));
  } else {
    return getParameterTypeNode('Body', parameter, schema, options, [ts.createTypeReferenceNode('MediaType', undefined)]);
  }
}

function specializeWithMediaType(parameterRef: ParameterTypeReference, $: Context, options?: ParameterOptions): ParameterTypeReference {
  if (!parameterRef.typeParameters) {
    return parameterRef;
  }
  const genericType = <ts.TypeReferenceNode>parameterRef.declaration.node;
  const specializedType = ts.createTypeReferenceNode(genericType.typeName, getMediaTypeArguments($, options));

  return {
    ...parameterRef,
    typeParameters: undefined,
    declaration: new TypeSyntax(specializedType)
  };
}

function getMediaTypeArguments($: Context, options?: ParameterOptions): Array<ts.TypeNode> | undefined {
  const consumes = options?.operation?.consumes ?? $.sourceModel.consumes;
  if (!consumes || consumes.length == 0) {
    return undefined;
  }

  const mediaTypes = new Array<ts.TypeNode>();
  for (const each of consumes) {
    mediaTypes.push(ts.createLiteralTypeNode(ts.createStringLiteral(each)));
  }

  return [ts.createUnionTypeNode(mediaTypes)];
}

function getPathParameterTypeNode(parameter: v2.PathParameter, schema: SchemaTypeReference, $: Context, options?: ParameterOptions) {
  // TODO: not yet represented in ADL
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return getParameterTypeNode('Path', parameter, schema, options);
}

function getFormDataParameterTypeNode(parameter: v2.FormDataParameter, schema: SchemaTypeReference, $: Context, options?: ParameterOptions) {
  // TODO: not yet represented in ADL
  const allowReserved = parameter['x-ms-skip-url-encoding'];
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return getParameterTypeNode('FormData', parameter, schema, options);
}

function getQueryParameterTypeNode(parameter: v2.QueryParameter, schema: SchemaTypeReference, $: Context, options?: ParameterOptions) {
  // TODO: not yet represented in ADL
  const allowEmptyValue = parameter.allowEmptyValue;
  const allowReserved = parameter['x-ms-skip-url-encoding'];
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return getParameterTypeNode('Query', parameter, schema, options);
}

function getHeaderParameterTypeNode(parameter: v2.HeaderParameter, schema: SchemaTypeReference, $: Context, options?: ParameterOptions) {
  // TODO: not yet represented in ADL
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return getParameterTypeNode('Header', parameter, schema, options);
}

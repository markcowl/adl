import { isReference, v2 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { ts } from 'ts-morph';
import { createTypeAlias } from '../../../model/schema/alias';
import { ParameterTypeReference, SchemaTypeReference } from '../../../model/schema/type';
import { normalizeIdentifier, TypeSyntax } from '../../../support/codegen';
import { processSchema } from './schema';
import { Context } from './serializer';

export async function processParameter(parameter: v2.Parameter | v2.ParameterReference, $: Context, options?: { isAnonymous?: boolean }): Promise<ParameterTypeReference> {
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
      return parameterRef;
    }

    const parameterTypeName = options?.isAnonymous ? anonymous('parameter') : nameOf(parameter);
    const schema = await processSchema(<v2.Schema>parameter, $, { isAnonymous: true });
    const parameterTypeSyntax = getParameterSyntax(parameter, schema, $, options);

    const parameterRef: ParameterTypeReference = {
      name: parameter.name,
      description: options?.isAnonymous ? parameter.description : undefined,
      required: parameter.required ?? false,
      declaration: parameterTypeSyntax,
      requiredReferences: schema.requiredReferences,
    };

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

function getParameterSyntax(parameter: v2.Parameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }): TypeSyntax {
  switch (parameter.in) {
    case v2.ParameterLocation.Path:
      return getPathParameterSyntax(<v2.PathParameter>parameter, schema, $, options);
    case v2.ParameterLocation.FormData:
      return getFormDataParameterSyntax(<v2.FormDataParameter>parameter, schema, $, options);
    case v2.ParameterLocation.Query:
      return getQueryParameterSyntax(<v2.QueryParameter>parameter, schema, $, options);
    case v2.ParameterLocation.Header:
      return getHeaderParameterSyntax(<v2.HeaderParameter>parameter, schema, $, options);
  }
  throw $.error(`unknown parameter location '${parameter.in}'`, parameter);
}

function getParameterTypeNode(
  parameterType: 'Path' | 'Query' | 'FormData' | 'Header',
  parameter: v2.Parameter,
  schema: SchemaTypeReference,
  options?: { isAnonymous?: boolean }) {
  const hasSafeParameterName = normalizeIdentifier(parameter.name) == parameter.name;

  if (options?.isAnonymous && parameterType == 'Path' && hasSafeParameterName) {
    // common case of inline path parameter with safe name is represented as the
    // underlying schema type for brevity
    return schema.declaration.node;
  }

  const args = [schema.declaration.node];
  if (!options?.isAnonymous || !hasSafeParameterName) {
    // inline case with safe parameter name does not repeat the parameter name
    // as type arg
    args.push(ts.createLiteralTypeNode(ts.createStringLiteral(parameter.name)));
  }

  return ts.createTypeReferenceNode(parameterType, args);
}

function getPathParameterSyntax(parameter: v2.PathParameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }) {
  // TODO: not yet represented in ADL
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return new TypeSyntax(getParameterTypeNode('Path', parameter, schema, options));
}

function getFormDataParameterSyntax(parameter: v2.FormDataParameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }) {
  // TODO: not yet represented in ADL
  const allowReserved = parameter['x-ms-skip-url-encoding'];
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return new TypeSyntax(getParameterTypeNode('FormData', parameter, schema, options));
}

function getQueryParameterSyntax(parameter: v2.QueryParameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }): TypeSyntax {
  // TODO: not yet represented in ADL
  const allowEmptyValue = parameter.allowEmptyValue;
  const allowReserved = parameter['x-ms-skip-url-encoding'];
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return new TypeSyntax(getParameterTypeNode('Query', parameter, schema, options));
}
function getHeaderParameterSyntax(parameter: v2.HeaderParameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }): TypeSyntax {
  // TODO: not yet represented in ADL
  const generatedLocation = parameter['x-ms-parameter-location'];
  //

  return new TypeSyntax(getParameterTypeNode('Header', parameter, schema, options));
}

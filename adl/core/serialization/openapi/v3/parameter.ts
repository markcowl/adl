import { isReference, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { ts } from 'ts-morph';
import { RenderStyle } from '../../../model/http/parameter';
import { createTypeAlias } from '../../../model/schema/alias';
import { ParameterTypeReference, SchemaTypeReference } from '../../../model/schema/type';
import { normalizeIdentifier, TypeSyntax } from '../../../support/codegen';
import { processSchema } from './schema';
import { Context } from './serializer';


export async function processParameter(parameter: v3.Parameter | v3.ParameterReference, $: Context, options?: { isAnonymous?: boolean }): Promise<ParameterTypeReference> {
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
    const schema = await processSchema(parameter.schema, $, { isAnonymous: true });
    const parameterTypeSyntax = getParameterSyntax(parameter, schema, $, options);

    const parameterRef: ParameterTypeReference = {
      name: parameter.name,
      description: options?.isAnonymous ? parameter.description : undefined,
      required: parameter.required ?? false,
      declaration: parameterTypeSyntax,
      requiredReferences: schema.requiredReferences,
      location: parameter.in,
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

function getParameterSyntax(parameter: v3.Parameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }): TypeSyntax {
  switch (parameter.in) {
    case v3.ParameterLocation.Path:
      return getPathParameterSyntax(<v3.PathParameter>parameter, schema, $, options);
    case v3.ParameterLocation.Cookie:
      return getCookieParameterSyntax(<v3.CookieParameter>parameter, schema, $, options);
    case v3.ParameterLocation.Query:
      return getQueryParameterSyntax(<v3.QueryParameter>parameter, schema, $, options);
    case v3.ParameterLocation.Header:
      return getHeaderParameterSyntax(<v3.HeaderParameter>parameter, schema, $, options);
  }
  throw $.error(`unknown parameter location '${parameter.in}'`, parameter);
}

function getParameterTypeNode(
  parameterType: 'Path' | 'Query' | 'Cookie' | 'Header',
  parameter: v3.Parameter,
  schema: SchemaTypeReference,
  options?: { isAnonymous?: boolean})
{
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

function getPathParameterSyntax(parameter: v3.PathParameter, schema: SchemaTypeReference, $: Context, options?: {isAnonymous?: boolean}) {
  // TODO: not yet represented in ADL
  const renderStyle = <any><unknown>parameter.style || RenderStyle.Simple;
  const explode = parameter.explode === undefined ? false : parameter.explode;
  //

  return new TypeSyntax(getParameterTypeNode('Path', parameter, schema, options));
}

function getCookieParameterSyntax(parameter: v3.CookieParameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }) {
  // TODO: not yet represented in ADL
  const explode = parameter.explode ?? false;
  //

  return new TypeSyntax(getParameterTypeNode('Cookie', parameter, schema, options));
}

function getQueryParameterSyntax(parameter: v3.QueryParameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }): TypeSyntax {
  // TODO: not yet represented in ADL
  const renderStyle = <any><unknown>parameter.style || RenderStyle.Form;
  const explode = parameter.explode ?? false;
  const allowEmptyValue = parameter.allowEmptyValue;
  const allowReserved = parameter.allowReserved;
  //

  return new TypeSyntax(getParameterTypeNode('Query', parameter, schema, options));
}
function getHeaderParameterSyntax(parameter: v3.HeaderParameter, schema: SchemaTypeReference, $: Context, options?: { isAnonymous?: boolean }): TypeSyntax {
  // TODO: not yet represented in ADL
  const renderStyle = <any><unknown>parameter.style || RenderStyle.Simple;
  const explode = parameter.explode ?? false;
  //

  return new TypeSyntax(getParameterTypeNode('Header', parameter, schema, options));
}
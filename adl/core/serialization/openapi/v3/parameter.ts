import { values } from '@azure-tools/linq';
import { unzip, v3 } from '@azure-tools/openapi';
import { use, valueOf } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { CookieParameter, HeaderParameter, Parameter, PathParameter, QueryParameter, RenderStyle } from '../../../model/http/parameter';
import { processInline } from './schema';
import { Context, ItemsOf } from './serializer';


export async function processParameters(input: ItemsOf<v3.Parameter>, $: Context): Promise<Element | undefined> {
  const { extensions, references, values: parameters } = unzip<v3.Parameter>(input);

  // handle extensions first
  for (const { key, value: extension } of values(extensions)) {
    // switch block to handle specific vendor extension?
    // unknown ones need to get attached to something.
  }

  // handle actual items next
  for (const { key, value: parameter } of values(parameters)) {
    await $.process(processParameter, parameter);
  }

  // handle references last 
  for (const { key, value: reference } of values(references)) {
    await $.process(processParameterReference, reference);
  }

  return undefined;
}


async function processParameterReference(parameterReference: v3.ParameterReference, $: Context, options?: { isAnonymous?: boolean }): Promise<Parameter | undefined> {
  return undefined;
}

export async function processParameter(parameter: v3.Parameter, $: Context, options?: { isAnonymous?: boolean }): Promise<Parameter | undefined> {

  switch (valueOf(use(parameter.in))) {
    case v3.ParameterLocation.Path:
      return processPathParameter(<v3.PathParameter>parameter, $, options);

    case v3.ParameterLocation.Cookie:
      return processCookieParameter(<v3.CookieParameter>parameter, $, options);

    case v3.ParameterLocation.Query:
      return processQueryParameter(<v3.QueryParameter>parameter, $, options);

    case v3.ParameterLocation.Header:
      return processHeaderParameter(<v3.HeaderParameter>parameter, $, options);
  }
  $.error(`unknown parameter location '${parameter.in}'`, parameter);

  return undefined;
}


export async function processPathParameter(parameter: v3.PathParameter, $: Context, options?: { isAnonymous?: boolean }): Promise<Parameter | undefined> {
  const schema = await processInline(parameter.schema, $) || $.api.schemas.Any;
  const result = new PathParameter(parameter.name, schema,
    parameter.explode === undefined ? false : parameter.explode, {
      description: parameter.description,
      required: parameter.required,
      renderStyle: <any><unknown>parameter.style || RenderStyle.Simple
    });
  result.addToAttic('example', parameter.example);

  $.api.http.parameters.push(result);
  return result;
}

export async function processCookieParameter(parameter: v3.CookieParameter, $: Context, options?: { isAnonymous?: boolean }): Promise<Parameter | undefined> {
  const schema = await processInline(parameter.schema, $) || $.api.schemas.Any;
  const result = new CookieParameter(parameter.name, schema,
    parameter.explode === undefined ? true : parameter.explode, {
      description: parameter.description,
      required: parameter.required
    }
  );
  result.addToAttic('example', parameter.example);

  $.api.http.parameters.push(result);
  return result;
}

export async function processQueryParameter(parameter: v3.QueryParameter, $: Context, options?: { isAnonymous?: boolean }): Promise<Parameter | undefined> {
  const schema = await processInline(parameter.schema, $) || $.api.schemas.Any;
  const renderStyle = <any><unknown>parameter.style || RenderStyle.Form;
  const result = new QueryParameter(parameter.name, schema,
    parameter.explode === undefined ? renderStyle === RenderStyle.Form ? true : false : parameter.explode, {
      description: parameter.description,
      required: parameter.required,
      renderStyle,
      allowEmptyValue: parameter.allowEmptyValue,
      allowReserved: parameter.allowReserved,

    });
  result.addToAttic('example', parameter.example);
  $.api.http.parameters.push(result);
  return result;
}
export async function processHeaderParameter(parameter: v3.HeaderParameter, $: Context, options?: { isAnonymous?: boolean }): Promise<Parameter | undefined> {
  const schema = await processInline(parameter.schema, $) || $.api.schemas.Any;
  const result = new HeaderParameter(parameter.name, schema,
    parameter.explode === undefined ? false : parameter.explode, {
      description: parameter.description,
      required: parameter.required,
      renderStyle: <any><unknown>parameter.style || RenderStyle.Simple
    });
  result.addToAttic('example', parameter.example);

  $.api.http.parameters.push(result);
  return result;
}
import { v2 } from '@azure-tools/openapi';
import { use, valueOf } from '@azure-tools/sourcemap';
import { HeaderParameter, PathParameter, QueryParameter, RenderStyle } from '../../../model/http/parameter';
import { firstOrDefault } from '../common';
import { processInline } from './schema';
import { Context } from './serializer';

export async function* parameter(parameter: v2.Parameter, $: Context, options?: { isAnonymous?: boolean }) {

  switch (valueOf(use(parameter.in))) {
    case v2.ParameterLocation.Path:
      return yield* processPathParameter(<v2.PathParameter>parameter, $, options);

    case v2.ParameterLocation.Query:
      return yield* processQueryParameter(<v2.QueryParameter>parameter, $, options);

    case v2.ParameterLocation.Header:
      return yield* processHeaderParameter(<v2.HeaderParameter>parameter, $, options);
  }
  throw $.error(`unknown parameter location '${parameter.in}'`, parameter);

}


export async function* processPathParameter(parameter: v2.PathParameter, $: Context, options?: { isAnonymous?: boolean }) {
  const schema = await firstOrDefault(processInline(<v2.Schema><unknown>parameter, $)) || $.api.schemas.Any;
  const result = new PathParameter(parameter.name, schema, false, {
    description: parameter.description,
    required: parameter.required,
    renderStyle:  RenderStyle.Simple 
  }); 
  yield result;
}


export async function* processQueryParameter(parameter: v2.QueryParameter, $: Context, options?: { isAnonymous?: boolean }) {
  const schema = await firstOrDefault(processInline(<v2.Schema>parameter, $)) || $.api.schemas.Any;
  const renderStyle =  RenderStyle.Form;
  const result = new QueryParameter(parameter.name, schema, true, {
    description: parameter.description,
    required: parameter.required,
    renderStyle,
    allowEmptyValue: parameter.allowEmptyValue,
    allowReserved: parameter['x-ms-skip-url-encoding'],

  });
  yield result;
}
export async function* processHeaderParameter(parameter: v2.HeaderParameter, $: Context, options?: { isAnonymous?: boolean }) {
  const schema = await firstOrDefault(processInline(<v2.Schema>parameter, $)) || $.api.schemas.Any;
  const result = new HeaderParameter(parameter.name, schema, false, {
    description: parameter.description,
    required: parameter.required,
    renderStyle: RenderStyle.Simple
  });
  
  yield result;
}
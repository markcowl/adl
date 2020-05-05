import { values } from '@azure-tools/linq';
import { unzip, v3, isReference } from '@azure-tools/openapi';
import { Element } from '../../../model/element';
import { Context, ItemsOf } from './serializer';
import { Parameter } from '../../../model/http/protocol';
import { processInline } from './schema';

const { hasSchema } = v3;



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
  const schema = await processInline(parameter.schema, $) || $.api.schemas.Any;

  return undefined;
}

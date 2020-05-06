import { v3 } from '@azure-tools/openapi';
import { nameOf } from '@azure-tools/sourcemap';
import { Payload } from '../../../model/http/body';
import { processInline } from './schema';
import { Context } from './serializer';
export async function processPayload(type: v3.MediaType, $: Context) {
  const mediaType = nameOf(type);
  const schema = await processInline(type.schema, $) || $.api.schemas.Any;
  const result = new Payload(mediaType, schema);
  result.addToAttic('example', type.example);
  result.addToAttic('encoding', type.encoding);
  return result;
}

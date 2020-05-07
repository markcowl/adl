import { v3 } from '@azure-tools/openapi';
import { Context } from './serializer';

export async function processPayload(type: v3.MediaType, $: Context) {
  /*
  const mediaType = nameOf(type);

  const schema = await processInline(type.schema, $) || $.api.schemas.Any;
  const result = new Request(mediaType, schema);
  
  // example data we can figure out later.
  result.addToAttic('example', type.example);

  // encoding information not necessary yet... 
  result.addToAttic('encoding', type.encoding);
  
  return result;
  */
}

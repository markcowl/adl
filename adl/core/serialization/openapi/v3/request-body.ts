import { values } from '@azure-tools/linq';
import { unzip, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { Body } from '../../../model/http/body';
import { processPayload } from './process-payload';
import { Context, ItemsOf } from './serializer';


export async function processRequestBodies(input: ItemsOf<v3.RequestBody>, $: Context): Promise<Element | undefined> {
  const { extensions, references, values: requestBodies } = unzip<v3.RequestBody>(input);

  // handle extensions first
  for (const { key, value: extension } of values(extensions)) {
    // switch block to handle specific vendor extension?
    // unknown ones need to get attached to something.
  }

  // handle actual items next
  for (const { key, value } of values(requestBodies)) {
    $.api.http.bodies.push(await $.process(requestBody,value));
  }

  // handle references last 
  for (const { key, value } of values(references)) {
    $.api.http.bodies.push(await $.processInline(requestBody, value));
  }

  return undefined;
}

export async function requestBody(requestBody: v3.RequestBody, $: Context, options?: { isAnonymous?: boolean }): Promise<Body | undefined> {
  const bodyName = options?.isAnonymous ? anonymous('requestBody') : nameOf(requestBody);
  
  const result = new Body(bodyName, {
    description: requestBody.description,
    required: requestBody.required,
  });
  
  for( const value of values(requestBody.content))  {
    result.payloads.push( await $.process( processPayload, value) ); 
  }
  return result;
}


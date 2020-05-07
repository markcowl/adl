import { items, values } from '@azure-tools/linq';
import { unzip, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { Request } from '../../../model/http/request';
import { processInline } from './schema';
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
    for await (const each of $.process2(requestBody, value)) {
      $.api.http.requests.push(each);
    }
    
  }

  // handle references last 
  for (const { key, value } of values(references)) {
    for await (const each of $.processInline2(requestBody, value)) {
      $.api.http.requests.push(each);  
    }
  }

  return undefined;
}

export async function *requestBody(requestBody: v3.RequestBody, $: Context, options?: { isAnonymous?: boolean }): AsyncGenerator<Request> {
  // a single request body gets turned into multiple requests with the same name 
  // (since we only want very weak binding between the requests, that's the job of the actual operation. )

  const bodyName = options?.isAnonymous ? anonymous('requestBody') : nameOf(requestBody);
  

  for( const {key:mediaType, value:type} of items(requestBody.content))  {
    const schema = await processInline(type.schema, $) || $.api.schemas.Any;
    
    const request = new Request(bodyName,mediaType,schema, {
      description: requestBody.description,
      required: requestBody.required,
    });

    // example data we can figure out later.
    request.addToAttic('example', type.example);

    // encoding information not necessary yet... 
    request.addToAttic('encoding', type.encoding);
    
    yield request;
  }
  
}


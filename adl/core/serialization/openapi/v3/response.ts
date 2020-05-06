import { values } from '@azure-tools/linq';
import { unzip, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { Response } from '../../../model/http/response';
import { header } from './header';
import { processPayload } from './process-payload';
import { Context, ItemsOf } from './serializer';

export async function processResponses(input: ItemsOf<v3.Response>, $: Context): Promise<Element | undefined> {
  const { extensions, references, values: responses } = unzip<v3.Response>(input);

  // handle extensions first
  for (const { key, value: extension } of values(extensions)) {
    // switch block to handle specific vendor extension?
    // unknown ones need to get attached to something.
  }

  // handle actual items next
  for (const { key, value: Response } of values(responses)) {
    await $.process(response, Response);
  }

  // handle references last 
  for (const { key, value: reference } of values(references)) {
    await $.processInline(response, reference);
  }

  return undefined;
}

export async function response(response: v3.Response, $: Context, options?: { isAnonymous?: boolean }): Promise<Response | undefined> {
  const responseName  = options?.isAnonymous ? anonymous('response') : nameOf(response);
  const result = new Response( responseName, {
    description: response.description
  });
  for( const value of values(response.headers)){
    const h = await $.processInline(header, value);
    result.headers.push(h); 
  }
  for (const value of values(response.content)) {
    result.payloads.push(await $.process(processPayload, value));
  }
  $.api.http.responses.push(result);
  return result;
}


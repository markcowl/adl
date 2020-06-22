import { items, length } from '@azure-tools/linq';
import { v3 } from '@azure-tools/openapi';
import { anonymous, isAnonymous, nameOf } from '@azure-tools/sourcemap';
import { Response } from '../../../model/http/response';
import { addExtensionsToAttic } from '../common';
import { processHeader } from './header';
import { processSchema } from './schema';
import { Context } from './serializer';


export async function* response(response: v3.Response, $: Context, options?: { isAnonymous?: boolean }): AsyncGenerator<Response> {
  const responseName = options?.isAnonymous ? anonymous('response') : nameOf(response);
  const isException = !isAnonymous(responseName) && (responseName == 'default' || responseName.startsWith('4') || responseName.startsWith('5'));

  if (length(response.content) === 0) {
    // no body/content
    const result = new Response(responseName, '', {
      description: response.description,
      isException
    });

    await processResponseHeaders(response, $, result);

    return yield addExtensionsToAttic(result, response);
  }

  for (const [mediaType, type] of items(response.content)) {
    const result = new Response(responseName, mediaType, {
      description: response.description,
      typeref:  type.schema ? await processSchema(type.schema, $, {isAnonymous: true}) : undefined,
      isException
    });

    await processResponseHeaders(response, $, result);
 
    // example data we can figure out later.
    result.addToAttic('example', type.example);
    // example data we can figure out later.
    result.addToAttic('examples', (<any>type).examples);

    // encoding information not necessary yet... 
    result.addToAttic('encoding', type.encoding);

    yield addExtensionsToAttic(result, response);
  }
}

async function processResponseHeaders(response: v3.Response, $: Context, result: Response) {
  for (const [key, value] of items(response.headers)) {
    const h = await processHeader(value, $, { isAnonymous: true, wireName: key });
    result.headers.push(h);
  }
}


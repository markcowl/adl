import { length, values } from '@azure-tools/linq';
import { v2 } from '@azure-tools/openapi';
import { anonymous, isAnonymous, nameOf } from '@azure-tools/sourcemap';
import { Response } from '../../../model/http/response';
import { addExtensionsToAttic } from '../common';
import { processHeader } from './header';
import { processSchema } from './schema';
import { Context } from './serializer';


export async function* response(response: v2.Response, $: Context, options?: { isAnonymous?: boolean; operation: v2.Operation }): AsyncGenerator<Response> {
  const responseName = options?.isAnonymous ? anonymous('response') : nameOf(response);
  const operation = options?.operation;
  const produces = operation?.produces || $.sourceModel.produces || [];
  const isException = !isAnonymous(responseName) && (responseName == 'default' || responseName.startsWith('4') || responseName.startsWith('5'));

  if (length(produces) === 0) {
    // no body/content
    const result = new Response(responseName, '', {
      description: response.description,
      isException
    });

    await processResponseHeaders(response, $, result);
    return yield addExtensionsToAttic(result, response);
  }

  for (const mediaType of values(produces)) {
    const result = new Response(responseName, mediaType, {
      description: response.description,
      typeref: response.schema ? (await processSchema(response.schema, $, {isAnonymous: true})) : undefined,
      isException
    });

    await processResponseHeaders(response, $, result);
    yield addExtensionsToAttic(result, response);
  }
}

async function processResponseHeaders(response: v2.Response, $: Context, result: Response) {
  for (const header of values(response.headers)) {
    const h = await processHeader(header, $, { isAnonymous: true });
    result.headers.push(h);
  }
}

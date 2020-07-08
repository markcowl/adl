import { ToRawDataUrl } from '@azure-tools/uri';
import { Readable } from 'stream';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const getUri = require('get-uri');

function getUriAsync(uri: string, options: { headers: { [key: string]: string } }): Promise<Readable> {
  return new Promise((r, j) => getUri(uri, options, (err: any, rs: Readable) => err ? j(err) : r(rs)));
}

export async function ReadUri(uri: string, headers: { [key: string]: string } = {}): Promise<Buffer> {
  const actualUri = ToRawDataUrl(uri);
  try {
    const readable = await getUriAsync(actualUri, { headers: headers });

    const readAll = new Promise<Buffer>(function (resolve, reject) {
      let result = Buffer.alloc(0);
      readable.on('data', data => result = Buffer.concat([result, data]));
      readable.on('end', () => resolve(result));
      readable.on('error', err => reject(err));
    });

    return await readAll;
  } catch (e) {
    throw new Error(`Failed to load '${uri}' (${e})`);
  }
}


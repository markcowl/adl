import { Dictionary, JsonReference, v3, vendorExtensions } from '@azure-tools/openapi';
import { use } from '@azure-tools/sourcemap';
import { ApiModel } from '../../../model/api-model';
import { Host } from '../../../support/file-system';
import { Context as Ctx, Visitor } from '../../../support/visitor';
import { processComponents } from './components';
import { processExternalDocs, processInfo, processTag } from './info';
import { processPaths } from './path';
import { processSecurity } from './security';
import { processServer } from './server';

/** takes an openapi3 model, converts it into a ADL model, and returns that */
export function loadOpenApi() {
  // nothing;

}

// node types that are objects
export type Context = Ctx<v3.Model>;

// node types that are objects or references
export type ItemsOf<T> = Dictionary<T | JsonReference<T>>;

export async function deserializeOpenAPI3(host: Host, ...inputs: Array<string>) {
  const output = await new Visitor<v3.Model>(new ApiModel(), host, 'oai3', ...inputs).process(processRoot);

  return output;
}

async function processRoot(oai3: v3.Model, $: Context) {

  const extensions = vendorExtensions(oai3);

  for (const { key } of extensions) {
    switch (key) {
      case 'x-ms-metadata':

        break;
      default:
        // record unknown extensions at model level
        break;
    }
  }

  // openapi3 info
  $.api.metaData = await $.process(processInfo, oai3.info) || $.api.metaData;
  
  // extner
  $.api.metaData.references.push( await $.process(processExternalDocs, oai3.externalDocs) );
  await $.processArray(processTag, oai3.tags, $.api.metaData.references);

  // components will have to be early, since other things will $ref them 
  await $.process(processComponents, oai3.components);

  await $.processArray(processServer, oai3.servers, $.api.http.connections);
  await $.process(processSecurity, oai3.security);

  // paths second to last
  await $.process(processPaths, oai3.paths);
  await $.process(processPaths, oai3['x-ms-paths']);

  // we don't need this.
  use(oai3.openapi);

  return $.api;
}


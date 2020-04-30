import { ApiModel } from '../../model/api-model';
import { Dictionary } from '@azure-tools/openapi';
import { v3, JsonReference, vendorExtensions } from '@azure-tools/openapi';

import { Visitor, Context as Ctx } from '../../support/visitor';
import { FileSystem } from '../../support/file-system';
import { processInfo, processExternalDocs, processTags } from './info';
import { processComponents } from './components';
import { processPaths } from './path';
import { processSecurity } from './security';
import { processServers } from './server';
import { use } from '@azure-tools/sourcemap';


/** takes an openapi3 model, converts it into a ADL model, and returns that */
export function loadOpenApi() {
  // nothing;

}

// node types that are objects
export type Context = Ctx<v3.Model>;

// node types that are objects or references
export type ItemsOf<T> = Dictionary<T | JsonReference<T>>;

export async function deserializeOpenAPI3(fileSystem: FileSystem, ...inputs: Array<string>) {
  const output = await new Visitor<v3.Model>(new ApiModel(), fileSystem, 'oai3', ...inputs).process(processRoot);


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


  // components will have to be early, since other things will $ref them 
  await $.process(processComponents, oai3.components);
  await $.process(processExternalDocs, oai3.externalDocs);
  await $.process(processServers, oai3.servers);
  await $.process(processSecurity, oai3.security);
  await $.process(processTags, oai3.tags);

  // paths second to last
  await $.process(processPaths, oai3.paths);

  // must go last, since we're going to be reading values out of it 
  await $.process(processInfo, oai3.info);

  // we don't need this.
  use(oai3.openapi);

  return $.api;
}


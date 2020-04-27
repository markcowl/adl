import { ApiModel } from '../../model/api-model';
import { Dictionary } from '@azure-tools/openapi';
import { v3, JsonReference, vendorExtensions } from '@azure-tools/openapi';

import { Visitor, Context as ProcessContext } from '../../support/visitor';
import { FileSystem } from '../../support/file-system';
import { processInfo, processExternalDocs, processTags } from './info';
import { processComponents } from './components';
import { processPaths } from './path';
import { processSecurity } from './security';
import { processServers } from './server';


/** takes an openapi3 model, converts it into a ADL model, and returns that */
export function loadOpenApi() {
  // nothing;

}

// node types that are objects
export type Context<T> = ProcessContext<v3.Model, T>;

// node types that are objects or references
export type DictionaryContext<T> = Context<Dictionary<T | JsonReference<T>>>;

export async function deserializeOpenAPI3(fileSystem: FileSystem, ...inputs: Array<string>) {
  const output = await new Visitor<v3.Model>(new ApiModel(), fileSystem, 'oai3', ...inputs).process(processRoot);

  return output;
}

async function processRoot($: Context<v3.Model>) {

  const extensions = vendorExtensions($.value);

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
  await $.process(processComponents, 'components');
  await $.process(processExternalDocs, 'externalDocs');
  await $.process(processServers, 'servers');
  await $.process(processSecurity, 'security');
  await $.process(processTags, 'tags');

  // paths second to last
  await $.process(processPaths, 'paths');

  // must go last, since we're going to be reading values out of it 
  await $.process(processInfo, 'info');

  // we don't need this.
  $.mark('openapi');


  return $.api;
}


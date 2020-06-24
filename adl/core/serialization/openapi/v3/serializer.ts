import { Dictionary, JsonReference, v3, vendorExtensions } from '@azure-tools/openapi';
import { ApiModel } from '../../../model/api-model';
import { HttpProtocol } from '../../../model/http/protocol';
import { Host } from '../../../support/file-system';
import { Context as Ctx, Visitor } from '../../../support/visitor';
import { consume } from '../common';
import { processExternalDocs, processInfo, processTag } from '../common/info';
import { processPaths } from '../v3/path';
import { processComponents } from './components';
import { authenticationRequirement } from './security';
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
  const output = await new Visitor<v3.Model>(new ApiModel(), host, 'oai3', ...inputs).process();

  return output;
}

export async function processOpenApi3(oai3: v3.Model, $: Context) {
  // call event for importing oai3
  $.emit.importOAI3(oai3);

  const extensions = vendorExtensions(oai3);

  for (const [key] of extensions) {
    switch (key) {
      case 'x-ms-metadata':

        break;
      default:
        // record unknown extensions at model level
        break;
    }
  }

  // openapi3 info
  await processInfo(oai3.info, $);

  // external docs are just a kind of reference
  for await (const reference of $.process(processExternalDocs, oai3.externalDocs)) {
    $.api.projectData.metaData.references.push(reference);
  }

  for await (const reference of $.processArray(processTag, oai3.tags)) {
    $.api.projectData.metaData.references.push(reference);
  }

  // components will have to be early, since other things will $ref them
  await consume($.process(processComponents, oai3.components));

  for await (const server of $.processArray(processServer, oai3.servers)) {
    (<HttpProtocol>$.api.protocols.http).connections.push(server);
  }

  for await (const security of $.processArray(authenticationRequirement, oai3.security)) {
    (<HttpProtocol>$.api.protocols.http).authenticationRequirements.push(security);
  }

  processPaths([oai3.paths, oai3['x-ms-paths']], $);

  return $.api;
}


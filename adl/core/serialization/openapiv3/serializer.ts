import { ApiModel } from '../../model/api-model';
import { Schema } from '../../model/schema';
import { HttpHeader } from '../../model/http/header';
import { VersionInfo } from '../../model/version-info';
import { Dictionary, hasSchema, } from '@azure-tools/openapi/v3';
import * as oai3 from '@azure-tools/openapi/v3';
import { isReference, isVendorExtension, JsonReference, VendorExtensions, ExternalDocumentation, vendorExtensions, unzip, Tag } from '@azure-tools/openapi/common';

import { values, items } from '@azure-tools/linq';
import { Visitor, anonymous } from '../../support/visitor';
import { Path } from '@azure-tools/sourcemap';


export function error(text: string) {
  throw new Error(text);
}
export function warn(text: string) {
  // throw new Error(text);
}

/** takes an openapi3 model, converts it into a ADL model, and returns that */
export function loadOpenApi(filename: string, model: oai3.Model) {
  // nothing;

}

// node types that are objects
export type Ctx<T> = Visitor<ApiModel, oai3.Model, T>;

// node types that are objects or references
export type CtxDict<T> = Visitor<ApiModel, oai3.Model, Dictionary<T | JsonReference<T>>>;


const ApiVersion = ['info', 'version'];


export function deserializeOpenAPI3(target: ApiModel, input: oai3.Model) {
  const context = new Visitor(target, input, 'inputfile.ymal');
  const extensions = vendorExtensions(input);

  for (const { key, value: extension } of extensions) {
    switch (key) {
      case 'x-ms-metadata':

        break;
      default:
        // record unknown extensions at model level
        break;
    }
  }

  context.process(processInfo, 'info');
  context.process(processComponents, 'components', input.components);
  context.process(processPaths, 'paths', input.paths);
  context.process(processExternalDocs, 'externalDocs', input.externalDocs);
  context.process(processServers, 'servers', input.servers);
  context.process(processSecurity, 'security', input.security);
  context.process(processTags, 'tags', input.tags);

}
async function processInfo(context: Ctx<oai3.Info>) {
  const { key, value, input, output } = context;
  // const md = new MetaData;

}
async function processComponents(context: Ctx<oai3.Components>) {
  const { key, value: components, input, output } = context;
  for (const { key, value: extension } of vendorExtensions(components)) {
    // switch(key)
  }

  const q = components['schemas'];
  await context.process(processSchemas, 'schemas', components.schemas);
  await context.process(processHeaders, 'headers', components.headers);
  await context.process(processCallbacks, 'callbacks', components.callbacks);
  await context.process(processExamples, 'examples', components.examples);
  await context.process(processLinks, 'links', components.links);
  await context.process(processParameters, 'parameters', components.parameters);
  await context.process(processRequestBodies, 'requestBodies', components.requestBodies);
  await context.process(processResponses, 'responses', components.responses);
  await context.process(processSecuritySchemes, 'securitySchemes', components.securitySchemes);
}

async function processSecuritySchemes(context: CtxDict<oai3.SecurityScheme>) {
  throw 'unimplmeneted';
}

async function processResponses(context: CtxDict<oai3.Response>) {
  throw 'unimplmeneted';
}

async function processRequestBodies(context: CtxDict<oai3.RequestBody>) {
  throw 'unimplmeneted';
}

async function processParameters(context: CtxDict<oai3.Parameter>) {
  throw 'unimplmeneted';
}

async function processLinks(context: CtxDict<oai3.Link>) {
  throw 'unimplmeneted';
}

async function processExamples(context: CtxDict<oai3.Example>) {
  throw 'unimplmeneted';
}

async function processCallbacks(context: CtxDict<oai3.Callback>) {
  throw 'unimplmeneted';
}


async function processSchemas(context: CtxDict<oai3.Schema>) {
  const { value } = context;
  const { extensions, references, values: schemas } = unzip<oai3.Schema>(value);

  // handle extensions first
  for (const { key, value: extension } of values(extensions)) {
    // switch block to handle specific vendor extension?
    // unknown ones need to get attached to something.
    switch (key) {
      case 'x-whatever':
        // do something with the extension
        // make sure it gets deleted
        delete value[key];
        break;
    }
  }

  // handle actual items next
  for (const { key, value: schema } of values(schemas)) {
    const newSchema = await context.process(processSchema, key, schema);
  }

  // handle references last 
  for (const { key, value: reference } of values(references)) {
    // we're going to create an alias type for these.
    await context.process(processReference, key, reference);
  }
}
// function processReferenceOf<T,Q>( ): ( ) => (context:Ctx<JsonReference<T>>) => Q|undefined {
// }

async function processReference<T>(context: Ctx<JsonReference<T>>) {
  throw 'unimplmeneted';
}

async function processHeaders(context: CtxDict<oai3.Header>) {
  const { value, process } = context;
  const { extensions, references, values: headers } = unzip<oai3.Header>(value);

  // handle extensions first
  for (const { key, value: extension } of values(extensions)) {
    // switch block to handle specific vendor extension?
    // unknown ones need to get attached to something.

    switch (key) {

      case 'x-whatever':
        // do something with the extension
        // make sure it gets deleted
        // delete value[key];
        break;
    }
  }

  // handle actual items next
  for (const { key, value: header } of values(headers)) {
    await process(processHeader, key);
  }

  // handle references last 
  for (const { key, value: reference } of values(references)) {
    await context.process(processHeaderReference, key, reference);
  }
}

async function processHeaderReference(context: Ctx<oai3.HeaderReference>) {
  const { key, value: headerReference, input, output } = context;
}

async function processHeader(context: Ctx<oai3.Header>) {
  const { key, value: header, input, output, use, create, set, sourceFile, process, track } = context;

  // these are in the OAI schema, but should not be in headers - freakout if they are used
  use('explode') && error('header definitions must not contain property \'explode\'');
  use('required') && warn('header definitions should not contain property \'required\'');

  // get the schema for the header 
  const schema = hasSchema(header) ?
    isReference(header.schema) ?
      // they have used a $ref to a schema - resolve that.
      // await process(processReference, header.schema)
      undefined :
      // an inlined schema --process that first
      await process(processSchema, anonymous('schema'), header.schema) :
    // nope, no schema.
    undefined;

  // create the http header object and track it. 
  const httpHeader = track(new HttpHeader({
    // maintain the key
    $key: key.toString(),

    // use the schema
    schema,

    // set a specific value 
    description: use('description', `-- test -- ${header.description}`),

    // set the style value
    style: use('style'),
  }));

  // preserve data that we're not using
  httpHeader.addToAttic('example', use('example'));


  // handle version information
  httpHeader.versionInfo.push(track<VersionInfo>({
    deprecated: use('deprecated', input.info.version),
    added: set(input.info.version, ApiVersion),
  }));
  httpHeader.addInternalData('oai3', { preferredFile: sourceFile });

  // add it to the model and return the header to the caller.
  return output.http.headers.push(httpHeader);
}

async function processSchema(context: Ctx<oai3.Schema>): Promise<Schema> {
  throw 'unimplmeneted';
}

async function processExternalDocs(context: Ctx<oai3.ExternalDocumentation>) {
  throw 'unimplmeneted';
}

async function processPaths(context: CtxDict<oai3.PathItem>) {
  throw 'unimplmeneted';
}
async function processSecurity(context: Ctx<Array<oai3.SecurityRequirement>>) {
  throw 'unimplmeneted';
}
async function processServers(context: Ctx<Array<oai3.Server>>) {
  throw 'unimplmeneted';
}
async function processTags(context: Ctx<Array<oai3.Tag>>) {
  throw 'unimplmeneted';
}
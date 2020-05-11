import { Dictionary, JsonReference, v2, vendorExtensions } from '@azure-tools/openapi';
import { use } from '@azure-tools/sourcemap';
import { Alias as GenericAlias } from '../../../model/alias';
import { ApiModel } from '../../../model/api-model';
import { Alias, AndSchema, AnyOfSchema, AnySchema, ArraySchema, Constant, Enum, ObjectSchema, Primitive, XorSchema } from '../../../model/schema';
import { Host } from '../../../support/file-system';
import { Context as Ctx, Visitor } from '../../../support/visitor';
import { firstOrDefault } from '../common';
import { processExternalDocs, processInfo, processTag } from '../common/info';
import { processSchema } from './schema';
import { securityScheme } from './security-schemes';
import { processServers } from './server';

// node types that are objects
export type Context = Ctx<v2.Model>;

// node types that are objects or references
export type ItemsOf<T> = Dictionary<T | JsonReference<T>>;

export async function deserializeOpenAPI2(host: Host, ...inputs: Array<string>) {
  const output = await new Visitor<v2.Model>(new ApiModel(), host, 'oai2', ...inputs).process(processRoot);

  return output;
}

async function processRoot(oai2: v2.Model, $: Context) {

  const extensions = vendorExtensions(oai2);

  for (const [key] of extensions) {
    switch (key) {
      case 'x-ms-metadata':

        break;
      default:
        // record unknown extensions at model level
        break;
    }
  }
  
  $.api.metaData = await firstOrDefault($.process(processInfo, oai2.info)) || $.api.metaData;

  // external docs are just a kind of reference
  for await (const reference of $.process(processExternalDocs, oai2.externalDocs)) {
    $.api.metaData.references.push(reference);
  }

  for await (const reference of $.processArray(processTag, oai2.tags)) {
    $.api.metaData.references.push(reference);
  }

  for await (const server of $.process(processServers, oai2)) {
    $.api.http.connections.push(server);
  }

  for await (const authentication of $.processDictionary(securityScheme, oai2.securityDefinitions)) {
    $.api.http.authentications.push(authentication);
  }

  // definitely, schemas first, since so much will $ref them
  // await consume($.process(processSchemas, components.schemas));
  for await (const schema of $.processDictionary(processSchema, oai2.definitions)) {
    // we have to split up where schemas go 
    if (schema instanceof GenericAlias) {
      // this happens when we get a top-level alias 
      // just sub in a schema alias for it
      $.api.schemas.aliases.push(new Alias(schema.name,schema.target));
      continue;
    }
    if (schema instanceof Alias) {
      $.api.schemas.aliases.push(schema);
      continue;
    }
    if (schema instanceof ObjectSchema) {
      $.api.schemas.objects.push(schema);
      continue;
    }
    if (schema instanceof Enum) {
      $.api.schemas.enums.push(schema);
      continue;
    }
    if (schema instanceof Constant) {
      $.api.schemas.constants.push(schema);
      continue;
    }
    if (schema instanceof AndSchema || schema instanceof XorSchema || schema instanceof AnyOfSchema) {
      $.api.schemas.combinations.push(schema);
      continue;
    }
    if (schema instanceof AnySchema || schema instanceof ArraySchema || schema instanceof Primitive) {
      continue;
    }

    throw new Error('Should not get here.');
  }

  // we don't need this.
  use(oai2.swagger);

  return $.api;
}


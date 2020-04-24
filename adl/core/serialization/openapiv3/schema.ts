import { unzip, JsonReference, StringFormat } from '@azure-tools/openapi';
import { values, length } from '@azure-tools/linq';
import { Element } from '../../model/element';
import { v3 } from '@azure-tools/openapi';
import { Context, DictionaryContext } from './serializer';
import { Alias, Schema, Schemas } from '../../model/schema';
import { processRefTarget } from '../../support/visitor';

export async function processSchemas($: DictionaryContext<v3.Schema>): Promise<Element | undefined> {
  const { value } = $;
  const { extensions, references, values: schemas } = unzip<v3.Schema>(value);
  // handle extensions first
  for (const { key } of values(extensions)) {
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
    await $.process(processSchema, key, schema);
  }
  // handle references last 
  for (const { key, value: reference } of values(references)) {
    // we're going to create an alias type for these.
    await $.process(processSchemaReference, key, reference);
  }
  return undefined;
}


export async function processSchemaReference($: Context<JsonReference<v3.Schema>>) {
  const { api } = $;
  const target = await processRefTarget($, processSchema);

  // now that we have a target
  // we can produce an alias to that target
  const alias = $.track(new Alias(target));

  api.schemas.aliases.push(alias);
  return alias;
}


export async function processSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  const { value: schema } = $;

  switch (schema.type) {
    case v3.JsonType.String:
      return processStringSchema($);

    case v3.JsonType.Boolean:
      return processBooleanSchema($);

    case v3.JsonType.Array:
      return processArraySchema($);

    case v3.JsonType.Number:
      return processNumberSchema($);

    case v3.JsonType.Integer:
      return processIntegerSchema($);

    case v3.JsonType.File:
      return processFileSchema($);

    case v3.JsonType.Object:
      return processObjectSchema($);

    case undefined:
      // dig deeper to figure out what this should be.

      // first, let's see if we can tell by format:
      switch (schema.format) {
        // is it some kind of binary response?
        case StringFormat.Binary:
        case StringFormat.File:
          return processFileSchema($);
      }

      if (length(schema.properties) > 0 || schema.discriminator || (<any>schema)['x-ms-discriminator-value'] || schema.additionalProperties !== undefined || schema.maxProperties !== undefined || schema.minProperties !== undefined) {
        // talk about properties or discriminator, pretty much mean object
        return processObjectSchema($);
      }

      // is enum or x-ms-enum specified?
      if (schema.enum || (<any>schema)['x-ms-enum']) {
        return processEnumSchema($);
      }

      if (schema.allOf) {
        // this could be an 'inheritance'
        // or a back-door way to $ref 

      }

      if (schema.anyOf) {
        // if they have anyOf, that means it has to be one or more 
        // of those types, but they could also have other properties
        // in here too.
      }

      if (schema.oneOf) {
        // if they have oneOf, that means it has to be one  
        // of those types, but they could also have other properties
        // in here too.
      }


      if (schema.items || schema.maxItems !== undefined || schema.uniqueItems) {
        // these only apply to arrays
        return processArraySchema($);
      }

      if (schema.pattern || schema.maxLength !== undefined || schema.minLength !== undefined) {
        // these only apply to strings
        return processStringSchema($);
      }

      if (schema.minimum !== undefined || schema.maximum !== undefined || schema.exclusiveMaximum !== undefined || schema.exclusiveMinimum !== undefined || schema.multipleOf !== undefined) {
        // these only apply to numbers
        return processNumberSchema($);
      }
      break;
  }
  // if we didn't catch what it could be, they could be aiming for 'any' (grrrrr)
  return processAnySchema($);
}

export async function processStringSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processBooleanSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processIntegerSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processNumberSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processArraySchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}
export async function processObjectSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processFileSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processEnumSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  const { value: schema } = $;
  const xmsEnum = (<any>schema)['x-ms-enum'];
  if (length(schema.enum) === 0 && length(xmsEnum) === 0) {
    // an enum with no values?
  }
  if (length(schema.enum) === 1 || length(xmsEnum) === 1) {
    // a single value enum 

  }
  return undefined;
}

export async function processAnySchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

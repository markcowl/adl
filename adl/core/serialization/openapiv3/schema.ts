import { unzip, JsonReference, StringFormat, isReference, IntegerFormat } from '@azure-tools/openapi';
import { values, length, items } from '@azure-tools/linq';
import { Element } from '../../model/element';
import { v3 } from '@azure-tools/openapi';
import { Context, DictionaryContext } from './serializer';
import { Alias, Schema, Schemas, Constraint, MaxLengthConstraint, MinLengthConstraint, ObjectSchema, Property, RegularExpressionConstraint, MinimumConstraint, MaximumConstraint, ExclusiveMinimumConstraint, ExclusiveMaximumConstraint, MultipleOfConstraint, ArraySchema, MaximumElementsConstraint, MinimumElementsConstraint, UniqueElementsConstraint } from '../../model/schema';
import { processRefTarget, isObjectClean } from '../../support/visitor';
import { anonymous } from '@azure-tools/sourcemap';

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

  // is enum or x-ms-enum specified?
  if (schema.enum || (<any>schema)['x-ms-enum']) {
    return processEnumSchema($);
  }

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
  const { value: schema, api, } = $;

  switch (schema.format) {
    case StringFormat.Base64Url:
    case StringFormat.Byte:
    case StringFormat.Binary:
      return processByteArraySchema($);

    case StringFormat.Char:
      return processCharSchema($);

    case StringFormat.Date:
      return processDateSchema($);

    case StringFormat.Time:
      return processTimeSchema($);

    case StringFormat.DateTime:
    case StringFormat.DateTimeRfc1123:
      return processDateTimeSchema($);

    case StringFormat.Duration:
      return processDurationSchema($);

    case StringFormat.Uuid:
      return processUuidSchema($);

    case StringFormat.Url:
      return processUriSchema($);

    case StringFormat.Password:
      return processPasswordSchema($);

    case StringFormat.OData:
      return processOdataSchema($);
  }
  // we're going to treat it as a standard string schema
  $.mark('type');

  // if this is just a plain string with no adornments, just return the common string instance. 
  if (!$.anyKeys) {
    return $.api.schemas.String;
  }

  // otherwise, we have to get the standard string and make an alias for it with the adornments. 
  const result = $.track(new Alias($.api.schemas.String));

  if (schema.maxLength) {
    result.constraints.push($.track(new MaxLengthConstraint($.use('maxLength'))));
  }

  if (schema.minLength) {
    result.constraints.push($.track(new MinLengthConstraint($.use('minLength'))));
  }

  if (schema.pattern) {
    result.constraints.push($.track(new RegularExpressionConstraint($.use('pattern'))));
  }

  // add it to the container.
  $.api.schemas.aliases.push(result);

  return result;
}

export async function processByteArraySchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processCharSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processDateSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processTimeSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processDateTimeSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processDurationSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processUuidSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processUriSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processPasswordSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processOdataSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processBooleanSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processIntegerSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  const { value: schema } = $;

  $.mark('type');
  const format = $.mark('format');

  let result = undefined;

  switch (format) {
    case IntegerFormat.Int32:
      result = $.api.schemas.Int32;
      break;

    case undefined:
    case IntegerFormat.Int64:
      result = $.api.schemas.Int64;
      break;
  }

  // if this is just a number with no adornments, just return the common instance
  if (!$.anyKeys) {
    return result;
  }
  if (!result) {
    throw new Error('Whoops');

  }
  // gonna need an alias
  const alias = new Alias(result, { $ });
  if (schema.minimum) {
    alias.constraints.push(new MinimumConstraint($.use('minimum')));
  }
  if (schema.maximum) {
    alias.constraints.push(new MaximumConstraint($.use('maximum')));
  }
  if (schema.exclusiveMinimum) {
    alias.constraints.push(new ExclusiveMinimumConstraint($.use('exclusiveMinimum')));
  }
  if (schema.exclusiveMaximum) {
    alias.constraints.push(new ExclusiveMaximumConstraint($.use('exclusiveMaximum')));
  }
  if (schema.multipleOf) {
    alias.constraints.push(new MultipleOfConstraint($.use('multipleOf')));
  }

  $.api.schemas.aliases.push(alias);
  return alias;
}

export async function processNumberSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  return undefined;
}

export async function processArraySchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  const { value: schema } = $;
  const elementSchema = await $.processPossibleReference(processSchemaReference, processSchema, anonymous('array'), schema.items) || $.api.schemas.Any;
  $.mark('items');
  $.mark('type');
  const result = new ArraySchema(elementSchema, { $ });
  if (!$.anyKeys) {
    $.api.schemas.primitives.push(result);
    return result;
  }
  const alias = new Alias(result, { $ });
  if (schema.maxItems) {
    alias.constraints.push(new MaximumElementsConstraint($.use('maxItems')));
  }
  if (schema.minItems) {
    alias.constraints.push(new MinimumElementsConstraint($.use('maxItems')));
  }
  if (schema.uniqueItems) {
    alias.constraints.push(new UniqueElementsConstraint($.use('maxItems')));
  }

  $.api.schemas.aliases.push(alias);

  return result;
}


export async function processObjectSchema($: Context<v3.Schema>): Promise<Schema | undefined> {
  const { key, value: schema } = $;

  $.mark('type');

  // creating an object schema 
  const result = $.track(new ObjectSchema($.set(key, [...$.path, 'key']), {
    // properties to include
    description: $.use('description'),

    // set the summary
    summary: $.use('title'),
    // foo: $.use('additionalProperties')
  }));

  for (const { key: propertyName, value: property } of items($.value.properties)) {

    // process schema/reference inline
    const propSchema = await $.processPossibleReference(processSchemaReference, processSchema, anonymous(propertyName), property) || $.api.schemas.Any;

    // remove empty property
    if (isObjectClean(property)) {
      delete (<any>$.value.properties)[propertyName];
    }

    // urg. messy. todo: clean up this
    // grabs the 'required' value for the property
    const i = schema.required?.indexOf(propertyName) ?? -1;
    let required = undefined;
    if (i > -1) {
      // was a required property
      schema.required?.splice(i, 1);
      required = $.set(true, [...$.path, 'required', i]);
    }
    result.properties.push($.track(new Property(propertyName, propSchema, {
      required
    })));
  }

  $.api.schemas.objects.push(result);


  return result;
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

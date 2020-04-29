import { unzip, JsonReference, StringFormat, isReference, IntegerFormat } from '@azure-tools/openapi';
import { values, length, items } from '@azure-tools/linq';
import { Element } from '../../model/element';
import { v3 } from '@azure-tools/openapi';
import { Context, ItemsOf } from './serializer';
import { Alias, Schema, Schemas, Constraint, MaxLengthConstraint, MinLengthConstraint, ObjectSchema, Property, RegularExpressionConstraint, MinimumConstraint, MaximumConstraint, ExclusiveMinimumConstraint, ExclusiveMaximumConstraint, MultipleOfConstraint, ArraySchema, MaximumElementsConstraint, MinimumElementsConstraint, UniqueElementsConstraint } from '../../model/schema';
import { isObjectClean } from '../../support/visitor';
import { use, anonymous, using, nameOf, unusedMembers } from '@azure-tools/sourcemap';

export async function processSchemas(value: ItemsOf<v3.Schema>, $: Context): Promise<Element | undefined> {
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
    await $.process(processSchema, schema);
  }
  // handle references last 
  for (const { key, value: reference } of values(references)) {
    // we're going to create an alias type for these.
    await $.process(processSchemaReference, reference);
  }
  return undefined;
}


export async function processSchemaReference(ref: JsonReference<v3.Schema>, $: Context) {
  const { api } = $;
  const target = await $.processRefTarget(ref, processSchema);

  // now that we have a target
  // we can produce an alias to that target
  const alias = new Alias(target);

  api.schemas.aliases.push(alias);
  return alias;
}


export async function processSchema(schema: v3.Schema, $: Context, isAnonymous = false): Promise<Schema | undefined> {

  // is enum or x-ms-enum specified?
  if (schema.enum || (<any>schema)['x-ms-enum']) {
    return processEnumSchema(schema, $);
  }

  switch (schema.type?.valueOf()) {
    case v3.JsonType.String:
      return processStringSchema(schema, $);

    case v3.JsonType.Boolean:
      return processBooleanSchema(schema, $);

    case v3.JsonType.Array:
      return processArraySchema(schema, $);

    case v3.JsonType.Number:
      return processNumberSchema(schema, $);

    case v3.JsonType.Integer:
      return processIntegerSchema(schema, $);

    case v3.JsonType.File:
      return processFileSchema(schema, $);

    case v3.JsonType.Object:
      return processObjectSchema(schema, $);

    case undefined:
      // dig deeper to figure out what this should be.

      // first, let's see if we can tell by format:
      switch (schema.format?.valueOf()) {
        // is it some kind of binary response?
        case StringFormat.Binary:
        case StringFormat.File:
          return processFileSchema(schema, $);
      }

      if (length(schema.properties) > 0 || schema.discriminator || (<any>schema)['x-ms-discriminator-value'] || schema.additionalProperties !== undefined || schema.maxProperties !== undefined || schema.minProperties !== undefined) {
        // talk about properties or discriminator, pretty much mean object
        return processObjectSchema(schema, $);
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
        return processArraySchema(schema, $);
      }

      if (schema.pattern || schema.maxLength !== undefined || schema.minLength !== undefined) {
        // these only apply to strings
        return processStringSchema(schema, $);
      }

      if (schema.minimum !== undefined || schema.maximum !== undefined || schema.exclusiveMaximum !== undefined || schema.exclusiveMinimum !== undefined || schema.multipleOf !== undefined) {
        // these only apply to numbers
        return processNumberSchema(schema, $);
      }
      break;
  }
  // if we didn't catch what it could be, they could be aiming for 'any' (grrrrr)
  return processAnySchema(schema, $);
}

export async function processStringSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  switch (schema.format?.valueOf()) {
    case StringFormat.Base64Url:
    case StringFormat.Byte:
    case StringFormat.Binary:
      return processByteArraySchema(schema, $);

    case StringFormat.Char:
      return processCharSchema(schema, $);

    case StringFormat.Date:
      return processDateSchema(schema, $);

    case StringFormat.Time:
      return processTimeSchema(schema, $);

    case StringFormat.DateTime:
    case StringFormat.DateTimeRfc1123:
      return processDateTimeSchema(schema, $);

    case StringFormat.Duration:
      return processDurationSchema(schema, $);

    case StringFormat.Uuid:
      return processUuidSchema(schema, $);

    case StringFormat.Url:
      return processUriSchema(schema, $);

    case StringFormat.Password:
      return processPasswordSchema(schema, $);

    case StringFormat.OData:
      return processOdataSchema(schema, $);
  }
  // we're going to treat it as a standard string schema
  use(schema.type);

  // if this is just a plain string with no adornments, just return the common string instance. 
  if (unusedMembers(schema)) {
    return $.api.schemas.String;
  }

  // otherwise, we have to get the standard string and make an alias for it with the adornments. 
  const result = new Alias($.api.schemas.String);

  if (schema.maxLength) {
    result.constraints.push(new MaxLengthConstraint(use(schema.maxLength)));
  }

  if (schema.minLength) {
    result.constraints.push(new MinLengthConstraint(use(schema.minLength)));
  }

  if (schema.pattern) {
    result.constraints.push(new RegularExpressionConstraint(use(schema.pattern)));
  }

  // add it to the container.
  $.api.schemas.aliases.push(result);

  return result;
}

export async function processByteArraySchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processCharSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processDateSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processTimeSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processDateTimeSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processDurationSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processUuidSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processUriSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processPasswordSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processOdataSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processBooleanSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processIntegerSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  use(schema.type);

  const format = use(schema.format);

  let result = undefined;

  switch (format?.valueOf()) {
    case IntegerFormat.Int32:
      result = $.api.schemas.Int32;
      break;

    case undefined:
    case IntegerFormat.Int64:
      result = $.api.schemas.Int64;
      break;
  }

  // if this is just a number with no adornments, just return the common instance
  if (!unusedMembers(schema)) {
    return result;
  }
  if (!result) {
    throw new Error('Whoops');

  }
  // gonna need an alias
  const alias = new Alias(result);
  if (schema.minimum) {
    alias.constraints.push(new MinimumConstraint(schema.minimum));
  }
  if (schema.maximum) {
    alias.constraints.push(new MaximumConstraint(use(schema.maximum)));
  }
  if (schema.exclusiveMinimum) {
    alias.constraints.push(new ExclusiveMinimumConstraint(use(schema.exclusiveMinimum)));
  }
  if (schema.exclusiveMaximum) {
    alias.constraints.push(new ExclusiveMaximumConstraint(use(schema.exclusiveMaximum)));
  }
  if (schema.multipleOf) {
    alias.constraints.push(new MultipleOfConstraint(use(schema.multipleOf)));
  }

  $.api.schemas.aliases.push(alias);
  return alias;
}

export async function processNumberSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processArraySchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  const elementSchema = await $.processPossibleReference(processSchemaReference, processSchema, schema.items) || $.api.schemas.Any;
  use(schema.items);
  use(schema.type);
  const result = new ArraySchema(elementSchema);
  if (!unusedMembers(schema)) {
    $.api.schemas.primitives.push(result);
    return result;
  }
  const alias = new Alias(result);
  if (schema.maxItems) {
    alias.constraints.push(new MaximumElementsConstraint(use(schema.maxItems)));
  }
  if (schema.minItems) {
    alias.constraints.push(new MinimumElementsConstraint(use(schema.minItems)));
  }
  if (schema.uniqueItems) {
    alias.constraints.push(new UniqueElementsConstraint(use(schema.uniqueItems)));
  }

  $.api.schemas.aliases.push(alias);

  return result;
}


export async function processObjectSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  use(schema.type);
  const key = nameOf(schema);

  // creating an object schema 
  const result = new ObjectSchema(<string>key, {
    // properties to include
    description: use(schema.description),

    // set the summary
    summary: use(schema.title),
  });
  if (result === undefined) {
    throw new Error('todo: no result');
  }

  for (const { key: propertyName, value: property } of items(schema.properties)) {

    // process schema/reference inline
    const propSchema = await $.processPossibleReference(processSchemaReference, processSchema, property) || $.api.schemas.Any;

    // remove empty property
    use(property);

    // grabs the 'required' value for the property
    let required = undefined;
    if (schema.required) {
      const i = schema.required.indexOf(propertyName);
      required = using(schema.required[i], true);
    }

    result.properties.push(new Property(propertyName, propSchema, {
      required
    }));
  }

  $.api.schemas.objects.push(result);

  return result;
}

export async function processFileSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

export async function processEnumSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  const xmsEnum = (<any>schema)['x-ms-enum'];

  if (length(schema.enum) === 0 && length(xmsEnum) === 0) {
    // an enum with no values?
  }
  if (length(schema.enum) === 1 || length(xmsEnum) === 1) {
    // a single value enum 

  }
  return undefined;
}

export async function processAnySchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return undefined;
}

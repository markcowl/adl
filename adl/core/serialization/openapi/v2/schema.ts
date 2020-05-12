import { items, length, values } from '@azure-tools/linq';
import { IntegerFormat, NumberFormat, StringFormat, v2 } from '@azure-tools/openapi';
import { anonymous, isUsed, nameOf, unusedMembers, use, using } from '@azure-tools/sourcemap';
import { Alias as GenericAlias } from '../../../model/alias';
import { Identity } from '../../../model/name';
import { Alias, ArraySchema, DictionarySchema, ExclusiveMaximumConstraint, ExclusiveMinimumConstraint, MaximumConstraint, MaximumElementsConstraint, MaximumPropertiesConstraint, MaxLengthConstraint, MinimumConstraint, MinimumElementsConstraint, MinimumPropertiesConstraint, MinLengthConstraint, MultipleOfConstraint, ObjectSchema, Property, ReadOnlyConstraint, RegularExpressionConstraint, Schema, ServerDefaultValue, UniqueElementsConstraint } from '../../../model/schema';
import { isEnumSchema, isObjectSchema, push, singleOrDefault } from '../common';
import { arrayProperties, commonProperties, numberProperties, objectProperties, processAnySchema, processBooleanSchema, processByteArraySchema, processCharSchema, processDateSchema, processDateTimeSchema, processDurationSchema, processEnumSchemaCommon, processFileSchema, processOdataSchema, processPasswordSchema, processTimeSchema, processUriSchema, processUuidSchema, stringProperties } from '../common/schema';
import { Context } from './serializer';


/** Schema processing options */
type Options = Partial<{
  /** this is an inline-declared anonymous schema; the name is not intended to be used as the final name */
  isAnonymous: boolean;

  /** processes the schema just as the target type, and not oneOf/allOf/anyOf/object/enum */
  justTargetType: boolean;

  /** note that this is a property declaration while processing this schema */
  isProperty: boolean;

  /** note that this is a parameter declaration while processing this schema */
  isParameter: boolean;

  forUnderlyingEnumType: boolean;
}>;


export async function* processInline(schema: v2.Schema | v2.SchemaReference | undefined, $: Context, options?: Options): AsyncGenerator<Schema> {
  if (schema) {
    for await (const result of $.processInline(processSchema, schema, options)) {
      if (result) {
        if (options?.isAnonymous) {
          // if this was anonymous, we just want back the target object 
          yield result instanceof GenericAlias ? result.target : result;
        } else {
          yield result instanceof GenericAlias ? new Alias(result.name, result.target, commonProperties(<any>schema)) : result;
        }
      }
    }
  }
}

async function* getSchemas(schemas: Array<v2.Schema | v2.SchemaReference> | undefined, $: Context): AsyncGenerator<Schema> {
  for (const each of values(use(schemas))) {
    for await (const schema of $.processInline(processSchema, each, { isAnonymous: true })) {
      yield schema instanceof GenericAlias ? schema.target : schema;
    }
  }
}

// eslint-disable-next-line require-yield
export async function* processSillyRef(schema: v2.Schema, $: Context, options?: { isAnonymous?: boolean; forUnderlyingEnumType?: boolean }): AsyncGenerator<Schema> {
  throw new Error('TODO: process silly references');

}

export async function* processSchema(schema: v2.Schema, $: Context, options?: { isAnonymous?: boolean; forUnderlyingEnumType?: boolean }): AsyncGenerator<Schema> {
  // mark this used once.
  use(schema.type);

  const impl = () => {
    // if enum or x-ms-enum is specified, process as enum
    // but not if we're already processing the enum and are now processing its underlying type
    if (!options?.forUnderlyingEnumType && isEnumSchema(schema)) {
      return processEnumSchema(schema, $);
    }

  
    if (length(schema.allOf) > 0) {
      // this could be composition
      //  
      // or a back-door way to $ref 
      if (length(schema.allOf) === 1) {
        if (!schema.properties) {
          // no properties, but inheritance,
          return processSillyRef(schema, $, options);
        }
      }
      // process schemas with allOf as objects 
      return processObjectSchema(schema, $, options);
    }

    switch (schema.type?.valueOf()) {
      case v2.JsonType.String:
        return processStringSchema(schema, $);

      case v2.JsonType.Boolean:
        return processBooleanSchema(schema, $);

      case v2.JsonType.Array:
        return processArraySchema(schema, $);

      case v2.JsonType.Number:
        return processNumberSchema(schema, $);

      case v2.JsonType.Integer:
        return processIntegerSchema(schema, $);

      case v2.JsonType.File:
        return processFileSchema(schema, $);

      case v2.JsonType.Object:
        return processObjectSchema(schema, $, options);

      case undefined:
        // dig deeper to figure out what this should be.

        // first, let's see if we can tell by format:
        switch (schema.format?.valueOf()) {
          // is it some kind of binary response?
          case StringFormat.Binary:
          case StringFormat.File:
            return processFileSchema(schema, $);
        }

        if (isObjectSchema(schema)) {
          // talk about properties or discriminator, pretty much mean object
          return processObjectSchema(schema, $, options);
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
  };
  for await (const result of impl()) {
    if (result && schema.example) {
      use(schema.example, true);
      result.addToAttic('example', schema.example);
    }
    yield result;
  }
}

export async function* processStringSchema(schema: v2.Schema, $: Context): AsyncGenerator<Schema> {
  use(schema.format);
  switch (schema.format?.valueOf()) {
    case StringFormat.Base64Url:
    case StringFormat.Byte:
    case StringFormat.Binary:
      return yield* processByteArraySchema(schema, $);

    case StringFormat.Char:
      return yield* processCharSchema(schema, $);

    case StringFormat.Date:
      return yield* processDateSchema(schema, $);

    case StringFormat.Time:
      return yield* processTimeSchema(schema, $);

    case StringFormat.DateTime:
    case StringFormat.DateTimeRfc1123:
      return yield* processDateTimeSchema(schema, $);

    case StringFormat.Duration:
      return yield* processDurationSchema(schema, $);

    case StringFormat.Uuid:
      return yield* processUuidSchema(schema, $);

    case StringFormat.Url:
    case StringFormat.Uri:
      return yield* processUriSchema(schema, $);

    case StringFormat.Password:
      return yield* processPasswordSchema(schema, $);

    case StringFormat.OData:
      return yield* processOdataSchema(schema, $);
  }

  if ($.forbiddenProperties(schema, ...objectProperties, ...arrayProperties, ...numberProperties)) {
    return;
  }

  // we're going to treat it as a standard string schema
  // if this is just a plain string with no adornments, just return the common string instance. 
  if (length(unusedMembers(schema)) === 0) {
    return yield $.api.schemas.String;
  }

  // otherwise, we have to get the standard string and make an alias for it with the adornments. 
  const alias = new Alias(anonymous('string'), $.api.schemas.String, commonProperties(schema));

  if (schema.default) {
    alias.defaults.push(new ServerDefaultValue(schema.default));
  }

  if (schema.readOnly) {
    alias.constraints.push(new ReadOnlyConstraint(schema.readOnly));
  }

  if (schema.maxLength) {
    alias.constraints.push(new MaxLengthConstraint(schema.maxLength));
  }

  if (schema.minLength) {
    alias.constraints.push(new MinLengthConstraint(schema.minLength));
  }

  if (schema.pattern) {
    alias.constraints.push(new RegularExpressionConstraint(schema.pattern));
  }

  // we'll have to come back to xml
  alias.addToAttic('xml', schema.xml);


  yield alias;
}


export async function* processIntegerSchema(schema: v2.Schema, $: Context): AsyncGenerator<Schema> {
  if ($.forbiddenProperties(schema, ...stringProperties, ...objectProperties, ...arrayProperties)) {
    return;
  }

  const format = use(schema.format);

  let result: Schema;

  switch (format?.valueOf()) {
    case IntegerFormat.Int32:
      result = $.api.schemas.Int32;
      break;

    case undefined:
    case IntegerFormat.Int64:
      result = $.api.schemas.Int64;
      break;

    case IntegerFormat.UnixTime:
      result = $.api.schemas.Time;
      break;


    default:
      throw new Error(`Unexpected integer format: ${format}`);
  }

  yield constrainNumericSchema(schema, $, result);
}

export async function* processNumberSchema(schema: v2.Schema, $: Context): AsyncGenerator<Schema> {
  const format = use(schema.format);

  if ($.forbiddenProperties(schema, ...stringProperties, ...objectProperties, ...arrayProperties)) {
    return;
  }

  let result: Schema;

  switch (format?.valueOf()) {
    case NumberFormat.Float:
      result = $.api.schemas.Float;
      break;

    case undefined:
    case NumberFormat.Double:
      result = $.api.schemas.Double;
      break;

    default:
      throw new Error(`Unexpected number format: ${format}`);
  }

  yield constrainNumericSchema(schema, $, result);
}

function constrainNumericSchema(schema: v2.Schema, $: Context, target: Schema): Schema {
  // if this is just a number with no adornments, just return the common instance
  if (length(unusedMembers(schema)) === 0) {
    return target;
  }

  // gonna need an alias
  const alias = new Alias(anonymous('number'), target, commonProperties(schema));

  if (schema.default) {
    alias.defaults.push(new ServerDefaultValue(schema.default));
  }

  if (schema.minimum) {
    if (schema.exclusiveMinimum) {
      alias.constraints.push(new ExclusiveMinimumConstraint(schema.minimum));
    } else {
      alias.constraints.push(new MinimumConstraint(schema.minimum));
    }
  }
  if (schema.maximum) {
    if (schema.exclusiveMaximum) {
      alias.constraints.push(new ExclusiveMaximumConstraint(schema.maximum));
    } else { 
      alias.constraints.push(new MaximumConstraint(schema.maximum));
    }
  }
  if (schema.multipleOf) {
    alias.constraints.push(new MultipleOfConstraint(schema.multipleOf));
  }

  // we'll have to come back to xml
  alias.addToAttic('xml', schema.xml);

  return alias;
}


export async function* processArraySchema(schema: v2.Schema, $: Context, options?: Options): AsyncGenerator<Schema> {
  const schemaName = <Identity>(options?.isAnonymous ? anonymous('array') : nameOf(schema));
  // if this isn't anonymous or a property or parameter, things like descriptions belong to this declaration
  const common = (!options?.isAnonymous && !options?.isParameter && !options?.isProperty) ? commonProperties(schema) : {};


  const elementSchema = await singleOrDefault(processInline(schema.items, $, { isAnonymous: true })) || $.api.schemas.Any;

  if ($.forbiddenProperties(schema, ...stringProperties, ...numberProperties)) {
    return undefined;
  }

  const result = new ArraySchema(elementSchema);

  if (length(unusedMembers(schema)) === 0) {
    return yield result;
  }

  const alias = new Alias(anonymous('array'), result, {
    name: schemaName,
    ...common
  });

  if (schema.default) {
    alias.defaults.push(new ServerDefaultValue(schema.default));
    use(schema.default, true); // default can be more than a primitive value
  }

  if (schema.readOnly) {
    alias.constraints.push(new ReadOnlyConstraint(schema.readOnly));
  }
  if (schema.maxItems !== undefined) {
    alias.constraints.push(new MaximumElementsConstraint(schema.maxItems));
  }
  if (schema.minItems !== undefined) {
    alias.constraints.push(new MinimumElementsConstraint(schema.minItems));
  }
  if (schema.uniqueItems !== undefined) {
    alias.constraints.push(new UniqueElementsConstraint(schema.uniqueItems));
  }

  // we'll have to come back to xml
  alias.addToAttic('xml', schema.xml);


  return yield alias;
}

export async function* processAdditionalProperties(schema: v2.Schema, $: Context, options?: Options): AsyncGenerator<Schema> {
  if (!schema.additionalProperties) {
    throw new Error('should not get here.');
  }

  const schemaName = options?.isAnonymous ? anonymous('dictionary') : nameOf(schema);

  const common = schema.properties ? {} : commonProperties(schema);

  // true means type == any
  const dictionaryType = schema.additionalProperties != true ? await singleOrDefault(processInline(schema.additionalProperties, $, { isAnonymous: true })) || $.api.schemas.Any : $.api.schemas.Any;

  if (length(common) > 0 || schema.maxProperties !== undefined || schema.minProperties !== undefined) {
    const result = new DictionarySchema(dictionaryType);

    const alias = new Alias(anonymous('dictionary'), result, {
      name: schemaName,
      ...common
    });

    if (schema.maxProperties !== undefined) {
      alias.constraints.push(new MaximumPropertiesConstraint(schema.maxProperties));
    }
    if (schema.minProperties !== undefined) {
      alias.constraints.push(new MinimumPropertiesConstraint(schema.minProperties));
    }
    if (schema.readOnly) {
      alias.constraints.push(new ReadOnlyConstraint(schema.readOnly));
    }
    if (schema.default) {
      alias.defaults.push(new ServerDefaultValue(schema.default));
    }

    // we'll have to come back to xml
    alias.addToAttic('xml', schema.xml);

    return yield alias;
  }

  // just a dictionary without constraints
  const result = new DictionarySchema(dictionaryType, {
    name: schemaName,
    ...common
  });

  yield result;
}


export async function* processObjectSchema(schema: v2.Schema, $: Context, options?: Options): AsyncGenerator<Schema> {

  if (schema.additionalProperties && length(schema.properties) === 0 && length(schema.allOf) === 0) {
    // if it has no actual properties of it's own, but it has additionalProperties, return just the dictionary
    // as the type.
    return yield* await processAdditionalProperties(schema, $, options);
  }
  const schemaName = options?.isAnonymous ? anonymous('object') : nameOf(schema);

  // creating an object schema 
  const result = new ObjectSchema(schemaName, commonProperties(schema));

  result.addToAttic('example', (<any>schema).example);
  
  // we'll have to come back to xml
  result.addToAttic('xml', schema.xml);
  result.addToAttic('x-ms-azure-resource', schema['x-ms-azure-resource']);
  result.addToAttic('x-ms-external', schema['x-ms-external']);


  const schemas = getSchemas(schema.allOf, $);
  await push(result.extends, schemas);

  // yeild this as soon as possible in case we recurse.
  yield result;

  // process the properties
  for (const [propertyName, property] of items(use(schema.properties))) {
    // process schema/reference inline
    const propSchema = await singleOrDefault(processInline(property, $, { isAnonymous: true })) || $.api.schemas.Any;

    // grabs the 'required' value for the property
    let required = undefined;

    if (schema.required) {
      const i = schema.required.indexOf(propertyName);
      required = using(schema.required[i], true);
    }

    const p = new Property(propertyName, propSchema, {
      required,
      // in OAI2, we've historically allowed description, readonly (and a few other things)
      // on a property, even if it's a reference
      description: (<any>property).description,
      readonly: (<any>property).readOnly,
      clientName: (<any>property)['x-ms-client-name']
    });
    
    p.addToAttic('example', (<any>property).example);
    p.addToAttic('x-ms-client-flatten', (<any>property)['x-ms-client-flatten']);
    $.addVersionInfo(p, property);
    result.properties.push(p);
  }
  use(schema.required);

  if (!isUsed(schema.required)) {
    for (const each of unusedMembers(schema.required)) {
      $.error(`Schema '${nameOf(schema)}' has required for property named '${(<any>schema.required)[each]}' `, schema);
    }
    throw new Error('fatal error');
  }

  if (schema.additionalProperties) {
    // if additionalProperties is specified, then the type should
    // be extending the dictionary of <type> 
    for await (const ds of processAdditionalProperties(schema, $, { isAnonymous: true })) {
      result.extends.push(await ds);
    }
  }
}

export async function* processEnumSchema(schema: v2.Schema, $: Context): AsyncGenerator<Schema> {
  // not using $.process here because we need to process a node that is already marked
  const type = await singleOrDefault(processSchema(schema, $, { forUnderlyingEnumType: true })) || $.api.schemas.Any;
  return yield* processEnumSchemaCommon(schema, $, type);
}


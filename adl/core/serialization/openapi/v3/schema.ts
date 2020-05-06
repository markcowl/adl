import { items, length, values } from '@azure-tools/linq';
import { IntegerFormat, JsonReference, NumberFormat, StringFormat, unzip, v3, XMSEnumValue } from '@azure-tools/openapi';
import { anonymous, nameOf, unusedMembers, use, using, isUsed } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { Alias, AndSchema, AnyOfSchema, ArraySchema, Constant, DictionarySchema, Enum, ExclusiveMaximumConstraint, ExclusiveMinimumConstraint, MaximumConstraint, MaximumElementsConstraint, MaximumPropertiesConstraint, MaxLengthConstraint, MinimumConstraint, MinimumElementsConstraint, MinimumPropertiesConstraint, MinLengthConstraint, MultipleOfConstraint, ObjectSchema, Property, RegularExpressionConstraint, Schema, SchemaName, UniqueElementsConstraint, XorSchema, ServerDefaultValue } from '../../../model/schema';
import { isEnumSchema, isObjectSchema, isPrimitiveSchema } from '../common';
import { Context, ItemsOf } from './serializer';
import { fail } from 'assert';

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

export async function processSchemaReference(ref: JsonReference<v3.Schema>, $: Context, options?: Options) {
  const { api } = $;
  const target = await $.processRefTarget(ref, processSchema);

  if (options?.isAnonymous) {
    return target;
  }
  // now that we have a target
  // we can produce an alias to that target
  const alias = new Alias(target);

  api.schemas.aliases.push(alias);
  return alias;
}

const arrayProperties = <Array<keyof v3.Schema>>['maxItems', 'minItems', 'uniqueItems'];
const numberProperties = <Array<keyof v3.Schema>>['multipleOf', 'maximum', 'exclusiveMaximum', 'minimum', 'exclusiveMinimum',];
const stringProperties = <Array<keyof v3.Schema>>['maxLength', 'minLength', 'pattern',];
const objectProperties = <Array<keyof v3.Schema>>['properties', 'discriminator', 'additionalProperties', 'minProperties', 'maxProperties'];
const notPrimitiveProperties = <Array<keyof v3.Schema>>[...stringProperties, ...objectProperties, ...arrayProperties, ...numberProperties];
const notObject = [...arrayProperties, ...numberProperties, ...stringProperties];

function commonProperties(schema: v3.Schema) {
  return {
    description: schema.description,
    summary: schema.title,
  };
}

export async function processInline(schema: v3.Schema | v3.SchemaReference | undefined, $: Context, options?: Options) {
  return schema ? $.processPossibleReference(processSchemaReference, processSchema, use(schema), { ...options, isAnonymous: true }) : undefined;
}

export async function processAnyOf(schema: v3.Schema, $: Context, options?: Options): Promise<Schema | undefined> {
  // anyof[A,B,C] literally means [A] or [B] or [C] or [A & B] or [A & C] or [B & C] or [A & B & C]
  // NOTE: "An instance validates successfully against this keyword if it validates successfully against at least one schema defined by this keyword's value."
  //
  // anyof Car, Cat
  // type aoCarCat = Car | Cat | (Car & Cat)
  //
  // if they have anyOf, that means it has to be one or more 
  // of those types, but they could also have other properties
  // in here too.
  //
  // if there is more to the object than that, we're going to create that part first, and do an union with that. 
  // 
  if (isPrimitiveSchema(schema)) {
    return $.error(`Schema of type '${schema.type}' may not be in an anyOf`, schema);
  }
  if (isEnumSchema(schema)) {
    return $.error('Enum schema may not be in an anyOf', schema);
  }
  if ($.forbiddenProperties(schema, ...notObject)) {
    return undefined;
  }

  // they are looking to make a THIS & anyOf[...] 
  // let's process the object first, and then we can process the anyof.
  const objectSchema = await (isObjectSchema(schema) ? processObjectSchema(schema, $, { isAnonymous: true, justTargetType: true }) : undefined);

  const oneOf = await (schema.oneOf ? processOneOf(schema, $, { isAnonymous: true, justTargetType: true }) : undefined);

  // const allOf = await (schema.oneOf ? processAllOf(schema, $, { isAnonymous: true, justTargetType: true }) : undefined);

  const schemaName = options?.isAnonymous ? anonymous('anyOf') : nameOf(schema);
  const combineWith = new Array<Schema>();
  if (objectSchema) {
    combineWith.push(objectSchema);
  }
  if (oneOf) {
    combineWith.push(oneOf);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const schemas = (await Promise.all(values(use(schema.anyOf)).select(each => processInline(each, $)).toArray())).map(each => each!);

  // if this is combined with anything
  if (combineWith.length > 0) {
    const anon = new AnyOfSchema(anonymous(schemaName), schemas);
    $.api.schemas.combinations.push(anon);

    const result = new AndSchema(schemaName, [anon, ...combineWith], commonProperties(schema));
    $.api.schemas.combinations.push(result);

    return result;
  }

  const result = new AnyOfSchema(schemaName, schemas, commonProperties(schema));
  $.api.schemas.combinations.push(result);
  return result;
}


export async function processOneOf(schema: v3.Schema, $: Context, options?: Options): Promise<Schema | undefined> {
  // oneof[A,B,C] literally means [A] or [B] or [C]
  //
  // oneOf Car, Cat
  // type CarOrCat = Car | Cat
  //
  //
  // if they have oneOf, that means it has to be one 
  // of those types, but they could also have other properties
  // in here too.

  if (isPrimitiveSchema(schema)) {
    return $.error(`Schema of type '${schema.type}' may not be in an oneOf`, schema);
  }
  if (isEnumSchema(schema)) {
    return $.error('Enum schema may not be in an oneOf', schema);
  }
  if ($.forbiddenProperties(schema, ...notObject)) {
    return undefined;
  }

  const schemaName = options?.isAnonymous ? anonymous('oneOf') : nameOf(schema);

  const objectSchema = options?.justTargetType ? undefined : await (isObjectSchema(schema) ? processObjectSchema(schema, $, { isAnonymous: true, justTargetType: true }) : undefined);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const schemas = (await Promise.all(values(use(schema.oneOf)).select(each => processInline(each, $)).toArray())).map(each => each!);

  if (objectSchema) {
    const result = new XorSchema(schemaName, [...schemas, objectSchema], commonProperties(schema));
    $.api.schemas.combinations.push(result);
    return result;
  }

  // no object combinations
  const result = new XorSchema(schemaName, schemas, commonProperties(schema));
  $.api.schemas.combinations.push(result);
  return result;
}

export async function processSillyRef(schema: v3.Schema, $: Context, options?: { isAnonymous?: boolean; forUnderlyingEnumType?: boolean }): Promise<Schema | undefined> {
  throw new Error('TODO: process silly references');
}

export async function processSchema(schema: v3.Schema, $: Context, options?: { isAnonymous?: boolean; forUnderlyingEnumType?: boolean }): Promise<Schema | undefined> {
  // mark this used once.
  use(schema.type);

  const impl = () => {
    // if enum or x-ms-enum is specified, process as enum
    // but not if we're already processing the enum and are now processing its underlying type
    if (!options?.forUnderlyingEnumType && isEnumSchema(schema)) {
      return processEnumSchema(schema, $);
    }


    if (length(schema.anyOf) > 0) {
      return processAnyOf(schema, $, options);
    }

    if (length(schema.oneOf) > 0) {
      if (schema.discriminator) {
        // are they using this as a parent schema and then trying to use bootstrap levitation 
        // to somehow make it work?

      }
      return processOneOf(schema, $, options);
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
  const result = await impl();

  if (result && schema.example) {
    use(schema.example, true);
    result.addToAttic('example', schema.example);
  }
  return result;
}

export async function processStringSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  use(schema.format);
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
    case StringFormat.Uri:
      return processUriSchema(schema, $);

    case StringFormat.Password:
      return processPasswordSchema(schema, $);

    case StringFormat.OData:
      return processOdataSchema(schema, $);
  }

  if ($.forbiddenProperties(schema, ...objectProperties, ...arrayProperties, ...numberProperties)) {
    return undefined;
  }

  // we're going to treat it as a standard string schema
  // if this is just a plain string with no adornments, just return the common string instance. 
  if (length(unusedMembers(schema)) === 0) {
    return $.api.schemas.String;
  }

  // otherwise, we have to get the standard string and make an alias for it with the adornments. 
  const result = new Alias($.api.schemas.String, commonProperties(schema));

  if (schema.default) {
    result.defaults.push(new ServerDefaultValue(schema.default));
  }

  if (schema.maxLength) {
    result.constraints.push(new MaxLengthConstraint(schema.maxLength));
  }

  if (schema.minLength) {
    result.constraints.push(new MinLengthConstraint(schema.minLength));
  }

  if (schema.pattern) {
    result.constraints.push(new RegularExpressionConstraint(schema.pattern));
  }

  // add it to the container.
  $.api.schemas.aliases.push(result);

  return result;
}

export async function processByteArraySchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...stringProperties, ...objectProperties, ...numberProperties)) {
    return undefined;
  }

  return $.api.schemas.ByteArray;
}

function addAliasWithDefault(schema: v3.Schema, resultSchema: Schema, $: Context) {
  if (schema.default) {
    const alias = new Alias(resultSchema, commonProperties(schema));
    alias.defaults.push(new ServerDefaultValue(schema.default));
    $.api.schemas.aliases.push(alias);
    return alias;
  }
  return resultSchema;
}

export async function processCharSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.Char, $);
}

export async function processDateSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.Date, $);
}

export async function processTimeSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.Time, $);
}

export async function processDateTimeSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.DateTime, $);
}

export async function processDurationSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.Duration, $);
}

export async function processUuidSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.Uuid, $);
}

export async function processUriSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }
  use(schema.example);

  return addAliasWithDefault(schema, $.api.schemas.Uri, $);
}

export async function processPasswordSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.Password, $);
}

export async function processOdataSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.OData, $);
}

export async function processBooleanSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...notPrimitiveProperties)) {
    return undefined;
  }

  return addAliasWithDefault(schema, $.api.schemas.Boolean, $);
}

export async function processIntegerSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  if ($.forbiddenProperties(schema, ...stringProperties, ...objectProperties, ...arrayProperties)) {
    return undefined;
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

    default:
      throw new Error(`Unexpected integer format: ${format}`);
  }

  return constrainNumericSchema(schema, $, result);
}

export async function processNumberSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  const format = use(schema.format);

  if ($.forbiddenProperties(schema, ...stringProperties, ...objectProperties, ...arrayProperties)) {
    return undefined;
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

  return constrainNumericSchema(schema, $, result);
}

function constrainNumericSchema(schema: v3.Schema, $: Context, target: Schema): Schema {
  // if this is just a number with no adornments, just return the common instance
  if (length(unusedMembers(schema)) === 0) {
    return target;
  }

  // gonna need an alias
  const alias = new Alias(target, commonProperties(schema));

  if (schema.default) {
    alias.defaults.push(new ServerDefaultValue(schema.default));
  }

  if (schema.minimum) {
    alias.constraints.push(new MinimumConstraint(schema.minimum));
  }
  if (schema.maximum) {
    alias.constraints.push(new MaximumConstraint(schema.maximum));
  }
  if (schema.exclusiveMinimum) {
    alias.constraints.push(new ExclusiveMinimumConstraint(schema.exclusiveMinimum));
  }
  if (schema.exclusiveMaximum) {
    alias.constraints.push(new ExclusiveMaximumConstraint(schema.exclusiveMaximum));
  }
  if (schema.multipleOf) {
    alias.constraints.push(new MultipleOfConstraint(schema.multipleOf));
  }

  $.api.schemas.aliases.push(alias);
  return alias;
}


export async function processArraySchema(schema: v3.Schema, $: Context, options?: Options): Promise<Schema | undefined> {
  const schemaName = <SchemaName>(options?.isAnonymous ? anonymous('array') : nameOf(schema));
  // if this isn't anonymous or a property or parameter, things like descriptions belong to this declaration
  const common = (!options?.isAnonymous && !options?.isParameter && !options?.isProperty) ? commonProperties(schema) : {};


  const elementSchema = await processInline(schema.items, $) || $.api.schemas.Any;

  if ($.forbiddenProperties(schema, ...stringProperties, ...numberProperties)) {
    return undefined;
  }

  const result = new ArraySchema(elementSchema);
  $.api.schemas.primitives.push(result);

  if (length(unusedMembers(schema)) === 0) {
    return result;
  }

  const alias = new Alias(result, {
    name: schemaName,
    ...common
  });

  if (schema.default) {
    alias.defaults.push(new ServerDefaultValue(schema.default));
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

  $.api.schemas.aliases.push(alias);

  return alias;
}

export async function processAdditionalProperties(schema: v3.Schema, $: Context, options?: Options): Promise<Schema> {
  if (!schema.additionalProperties) {
    throw new Error('should not get here.');
  }

  const schemaName = options?.isAnonymous ? anonymous('dictionary') : nameOf(schema);

  const common = schema.properties ? {} : commonProperties(schema);

  // true means type == any
  const dictionaryType = schema.additionalProperties != true ? await processInline(schema.additionalProperties, $) || $.api.schemas.Any : $.api.schemas.Any;

  if (length(common) > 0 || schema.maxProperties !== undefined || schema.minProperties !== undefined) {
    const result = new DictionarySchema(dictionaryType);
    $.api.schemas.primitives.push(result);

    const alias = new Alias(result, {
      name: schemaName,
      ...common
    });

    if (schema.maxProperties !== undefined) {
      alias.constraints.push(new MaximumPropertiesConstraint(schema.maxProperties));
    }
    if (schema.minProperties !== undefined) {
      alias.constraints.push(new MinimumPropertiesConstraint(schema.minProperties));
    }
    if (schema.default) {
      alias.defaults.push(new ServerDefaultValue(schema.default));
    }

    return alias;
  }

  // just a dictionary without constraints
  const result = new DictionarySchema(dictionaryType, {
    name: schemaName,
    ...common
  });
  $.api.schemas.primitives.push(result);

  return result;
}


export async function processObjectSchema(schema: v3.Schema, $: Context, options?: Options): Promise<Schema | undefined> {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const schemas = (await Promise.all(values(use(schema.allOf)).select(each => processInline(each, $)).toArray())).map(each => each!);

  if (schema.additionalProperties && length(schema.properties) === 0 && schemas.length === 0) {
    // if it has no actual properties of it's own, but it has additionalProperties, return just the dictionary
    // as the type.
    return processAdditionalProperties(schema, $, options);
  }

  const schemaName = options?.isAnonymous ? anonymous('object') : nameOf(schema);

  // creating an object schema 
  const result = new ObjectSchema(schemaName, commonProperties(schema));

  result.extends.push(...schemas);

  // process the properties
  for (const { key: propertyName, value: property } of items(use(schema.properties))) {
    // process schema/reference inline
    const propSchema = await processInline(property, $, { isProperty: true }) || $.api.schemas.Any;

    // grabs the 'required' value for the property
    let required = undefined;

    if (schema.required) {
      const i = schema.required.indexOf(propertyName);
      required = using(schema.required[i], true);
    }

    result.properties.push(new Property(propertyName, propSchema, {
      required,
      description: property.description,
      writeonly: property.writeOnly,
      readonly: property.readOnly,
    }));
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
    const ds = processAdditionalProperties(schema, $, { isAnonymous: true });
    result.extends.push(await ds);
  }
  // used up:

  $.api.schemas.objects.push(result);

  return result;
}

export async function processFileSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return $.api.schemas.File;
}

export async function processEnumSchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  const schemaEnum = use(schema.enum) ?? [];
  const xmsEnum = use(schema['x-ms-enum']) ?? {};
  const values: Array<XMSEnumValue> = xmsEnum.values ?? schemaEnum.map(v => ({ value: v }));

  // not using $.process here because we need to process a node that is already marked
  const type = await processSchema(schema, $, { forUnderlyingEnumType: true }) ?? $.api.schemas.Any;
  const result = new Enum(type, {
    name: xmsEnum.name
  });
  result.sealed = !xmsEnum.modelAsString;

  for (const each of values) {
    const constant = new Constant(type, use(each.value), {
      name: each.name,
      description: each.description
    });
    result.values.push(constant);
  }

  // an enum with only one value is treated as single constant directly
  if (result.values.length == 1) {
    $.api.schemas.constants.push(result.values[0]);
    return result.values[0];
  }

  $.api.schemas.enums.push(result);
  return result;
}

export async function processAnySchema(schema: v3.Schema, $: Context): Promise<Schema | undefined> {
  return $.api.schemas.Any;
}

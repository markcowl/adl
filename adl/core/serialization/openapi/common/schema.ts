import { IntegerFormat, NumberFormat, v2, v3, XMSEnumValue } from '@azure-tools/openapi';
import { anonymous, nameOf } from '@azure-tools/sourcemap';
import { createAliasType } from '../../../model/schema/alias';
import { addDefault } from '../../../model/schema/default';
import { addEncoding, EncodingReference } from '../../../model/schema/encoding';
import { createEnum } from '../../../model/schema/enum';
import { TypeReference } from '../../../model/schema/type';
import { Context, OAIModel } from '../../../support/visitor';


export const arrayProperties = <Array<keyof v2.Schema&v3.Schema>>['maxItems', 'minItems', 'uniqueItems'];
export const numberProperties = <Array<keyof v2.Schema & v3.Schema>>['multipleOf', 'maximum', 'exclusiveMaximum', 'minimum', 'exclusiveMinimum',];
export const stringProperties = <Array<keyof v2.Schema & v3.Schema>>['maxLength', 'minLength', 'pattern',];
export const objectProperties = <Array<keyof v2.Schema & v3.Schema>>['properties', 'discriminator', 'additionalProperties', 'minProperties', 'maxProperties'];
export const notPrimitiveProperties = <Array<keyof v2.Schema & v3.Schema>>[...stringProperties, ...objectProperties, ...arrayProperties, ...numberProperties];
export const notObject = [...arrayProperties, ...numberProperties, ...stringProperties];

/** Schema processing options */
export type Options = Partial<{
  /** this is an inline-declared anonymous schema; the name is not intended to be used as the final name */
  isAnonymous: boolean;

  /** processes the schema just as the target type, and not oneOf/allOf/anyOf/object/enum */
  justTargetType: boolean;

  /** note that this is a property declaration while processing this schema */
  isProperty: boolean;

  /** note that this is a parameter declaration while processing this schema */
  isParameter: boolean;
}>;

export function commonProperties(schema: v3.Schema|v2.Schema) {
  return {
    description: schema.description,
    summary: schema.title,
    clientName: (<any>schema)['x-ms-client-name'],

    // todo: I'm not fond of having this in schema -- we should strongly consider refactoring this so the consumer gets it (ie, the property)
    nullable: (<any>schema).nullable || schema['x-nullable'],
    readOnly: (<any>schema).readOnly,
  };
}

export function versionInfo<T extends OAIModel>($: Context<T>, versionedElement: any) {
  return {
    since: $.apiVersion,
    deprecated: versionedElement.deprecated ? $.apiVersion : undefined,
  };
}

export async function processCharSchema<T extends OAIModel>(schema: v3.Schema | v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.char, $);
}


export async function processDateSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.date, $);
}

export async function processTimeSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.time, $);
}

export async function processDateTimeSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>, encoding?: EncodingReference): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.dateTime, $, encoding);
}

export async function processDurationSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.duration, $);
}

export async function processUuidSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.uuid, $);
}

export async function processUriSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.uri, $);
}

export async function processPasswordSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.password, $);
}

export async function processOdataSchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.odata, $);
}

export async function processBooleanSchema<T extends OAIModel>(schema: v3.Schema | v2.Schema, $: Context<T>, options?: Options): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>notPrimitiveProperties);

  return wrapWithAliasIfNeeded(schema, $.api.schemas.primitives.boolean, $);
}

export async function processByteArraySchema<T extends OAIModel>(schema: v3.Schema | v2.Schema, $: Context<T>): Promise<TypeReference> {
  // throws on error.
  $.assertNoForbiddenProperties(schema, ...<any>stringProperties, ...<any>objectProperties, ...<any>numberProperties);
    
  return $.api.schemas.primitives.byteArray;
}

export function wrapWithAliasIfNeeded<T extends OAIModel>(schema: v3.Schema | v2.Schema, type: TypeReference, $: Context<T>, encoding?: EncodingReference) {
  if (schema.default || schema.description || schema.title || (<any>schema).nullable || schema['x-nullable'] || (<any>schema).readOnly || encoding) {
    let alias = createAliasType($.api, anonymous(nameOf(schema)), type, commonProperties(schema));
    
    if( encoding) {
      alias = addEncoding(alias, encoding);
    }
    
    if (schema.default) {
      alias = addDefault(alias, schema.default);
    }

    if ((<any>schema).readOnly) {
      //todo?
    }

    if ((<any>schema).nullable || schema['x-nullable']) {
      //todo?
    }
    return alias;
  }
  return type;
}

export async function processNumberSchema<T extends OAIModel>(schema: v2.Schema|v3.Schema, $: Context<T>, options?: Options ): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>stringProperties, ...<any>objectProperties, ...<any>arrayProperties);
  
  switch (schema.format) {
    case NumberFormat.Float:
      return $.api.schemas.primitives.float;

    case undefined:
    case NumberFormat.Double:
      return $.api.schemas.primitives.double;

    default:
      throw new Error(`Unexpected number format: ${schema.format}`);
  }
}


export async function processIntegerSchema<T extends OAIModel>(schema: v2.Schema | v3.Schema, $: Context<T>, options?: Options ): Promise<TypeReference> {
  $.assertNoForbiddenProperties(schema, ...<any>stringProperties, ...<any>objectProperties, ...<any>arrayProperties);

  switch (schema.format) {
    case IntegerFormat.Int32:
      return $.api.schemas.primitives.int32;

    case undefined:
    case IntegerFormat.Int64:
      return $.api.schemas.primitives.int64;

    case IntegerFormat.UnixTime:
      return $.api.schemas.primitives.time;

    default:
      throw new Error(`Unexpected integer format: ${schema.format}`);
  }
}

export async function processFileSchema<T extends OAIModel>(schema: v3.Schema | v2.Schema, $: Context<T>, options?: Options): Promise<TypeReference> {
  return $.api.schemas.primitives.file;
}

export async function processAnySchema<T extends OAIModel>(schema: v3.Schema|v2.Schema, $: Context<T>): Promise<TypeReference> {
  return $.api.schemas.primitives.any;
}

export async function processEnumSchema<T extends OAIModel>(schema: v3.Schema | v2.Schema, $: Context<T>, options?: Options): Promise<TypeReference> {
  const schemaEnum = schema.enum || [];
  const xmsEnum = schema['x-ms-enum'] || {};
  const values: Array<XMSEnumValue> = xmsEnum.values || schemaEnum.map(value => ({ value }));
  const name = xmsEnum.name || (options?.isAnonymous ? anonymous('enum') : nameOf(schema));
  const extensible = xmsEnum.modelAsString;

  // enums are a bit funny -- they can define their name inside the x-ms-enum declaration 
  // which means there can be multiple declarations for the same enum 
  const result = createEnum($.api, name, values, {
    extensible,
    ...commonProperties(schema),
    ...versionInfo($, schema),
  });

  return result;
}
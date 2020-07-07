import { ts } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { TypeReference } from './type';

export function createDictionary(elementTypeReference: TypeReference): TypeReference {
  return {
    declaration: new TypeSyntax(`Dictionary<${elementTypeReference.declaration}>`),
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export function createArray(elementTypeReference: TypeReference): TypeReference {
  return {
    declaration: new TypeSyntax(`Array<${elementTypeReference.declaration}>`),
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export function createPrimitiveType(declaration: string): TypeReference {
  return {
    declaration: new TypeSyntax(declaration),
    requiredReferences: []
  };
}

export function createKnownType(kind: ts.KeywordTypeNode['kind']): TypeReference{
  return {
    declaration: new TypeSyntax(ts.createKeywordTypeNode(kind)),
    requiredReferences: []
  };

}

export const Primitives = {
  any: createKnownType(ts.SyntaxKind.AnyKeyword),

  string: createKnownType(ts.SyntaxKind.StringKeyword),
  char: createPrimitiveType('char'),
  byte: createPrimitiveType('byte'),
  int16: createPrimitiveType('int16'),
  int32: createPrimitiveType('int32'),
  int64: createPrimitiveType('int64'),
  boolean: createKnownType(ts.SyntaxKind.BooleanKeyword),
  double: createPrimitiveType('double'),
  float: createPrimitiveType('float'),
  byteArray: createPrimitiveType('Array<byte>'),
  date: createPrimitiveType('date'),
  time: createPrimitiveType('time'),
  unixtime: createPrimitiveType('unixtime'),
  dateTime: createPrimitiveType('dateTime'),
  duration: createPrimitiveType('duration'),
  uuid: createPrimitiveType('uuid'),
  uri: createPrimitiveType('uri'),
  password: createPrimitiveType('password'),
  odata: createPrimitiveType('odata'),
  file: createPrimitiveType('file'),
};
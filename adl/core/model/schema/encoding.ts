import { ts } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { TypeReference } from './type';

export interface EncodingReference {
  implementation: ts.TypeNode;
}
export const Encodings = {
  UrlEncoding: { implementation: ts.createTypeReferenceNode('UrlEncoding', undefined) },
  RFC1123: { implementation: ts.createTypeReferenceNode('RFC1123', undefined) },

};

export function addEncoding(type: TypeReference, encoding: EncodingReference): TypeReference {
  return {
    ...type,
    declaration: new TypeSyntax(ts.createIntersectionTypeNode([type.declaration.node, encoding.implementation]))
  };
}

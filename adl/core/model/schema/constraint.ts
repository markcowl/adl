import { ts } from 'ts-morph';
import { createIntersectionTypeNode, TypeSyntax } from '../../support/codegen';
import { TypeReference } from './type';


export interface ConstraintReference  {
  implementation: ts.TypeNode;
}

function createConstraint(constraintName: string, ... parameters: Array<string|number>): ConstraintReference {
  const args = parameters.length == 0 ? undefined : parameters.map(p => ts.createLiteralTypeNode(<ts.LiteralExpression>ts.createLiteral(p)));
  return {
    implementation: ts.createTypeReferenceNode(constraintName, args)
  };
}

export const Constraints = {
  maximumProperties: (count: number)=>  createConstraint('MaximumProperties',count),
  minimumProperties: (count: number) => createConstraint('MinimumProperties', count),

  minimum : (count: number) => createConstraint('Minimum', count),
  maximum : (count: number) => createConstraint('Maximum', count),
  exclusiveMinimum : (count: number) => createConstraint('ExclusiveMinimum', count),
  exclusiveMaximum : (count: number) => createConstraint('ExclusiveMaximum', count),
  multipleOf : (count: number) => createConstraint('MultipleOf', count),
  maxLength : (count: number) => createConstraint('MaxLength', count),
  minLength : (count: number) => createConstraint('MinLength', count),
  regularExpression : (regEx: string) => createConstraint('RegularExpression', regEx),
  maximumElements : (count: number) => createConstraint('MaximumElements', count),
  minimumElements : (count: number) => createConstraint('MinimumElements', count),
  uniqueElements : () => createConstraint('UniqueElements'),
};

export function addConstraint(type: TypeReference, constraint: ConstraintReference): TypeReference {
  return {
    ... type,
    sourceFile: undefined,
    requiredReferences: [type],
    declaration: new TypeSyntax(createIntersectionTypeNode(type.declaration.node, constraint.implementation))
  };
}

export interface EncodingReference {
  implementation: ts.TypeNode;
}

export const Encodings= {
  UrlEncoding: { implementation: 'UrlEncoding' },
  RFC1123: { implementation: 'RFC1123' },

};

export function addEncoding(type: TypeReference, encoding: EncodingReference): TypeReference {
  return {
    ...type,
    declaration: new TypeSyntax(createIntersectionTypeNode(type.declaration.node, encoding.implementation))
  };
}


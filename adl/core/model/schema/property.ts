import { PropertySignature, PropertySignatureStructure, StructureKind } from 'ts-morph';
import { normalizeMemberName } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { addNullable } from '../../support/typescript';
import { SchemaInitializer } from '../typescript/schema';
import { TypedElement } from '../typescript/typed-element';
import { TypeReference } from './type';

export interface PropertyInitializer extends SchemaInitializer {
  required?: boolean;
}

export class Property extends TypedElement<PropertySignature> {
  get readOnly() {
    return this.node.isReadonly();
  }
  set readOnly(value: boolean) {
    this.node.setIsReadonly(value);
  }
}

export interface ModelPropertySignatureStructure extends PropertySignatureStructure {
  typeReference: TypeReference;
}

export function createPropertySignature(name: string, typeReference: TypeReference, initializer?: PropertyInitializer): ModelPropertySignatureStructure {
  typeReference = initializer?.nullable ? addNullable(typeReference) : typeReference;
  return {
    kind: StructureKind.PropertySignature,
    name: normalizeMemberName(name),
    typeReference: typeReference,
    type: typeReference.declaration.text,
    isReadonly: initializer?.readOnly,
    hasQuestionToken: !(initializer?.required),
    docs: createDocs(initializer),
  };
}

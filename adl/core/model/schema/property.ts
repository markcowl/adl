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

export function createPropertySignature(name: string, typeReference: TypeReference, initializer?: PropertyInitializer): PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
    name: normalizeMemberName(name),
    type: initializer?.nullable ? addNullable(typeReference.declaration.text) : typeReference.declaration.text,
    isReadonly: initializer?.readOnly,
    hasQuestionToken: !(initializer?.required),
    docs: createDocs(initializer),
  };
}

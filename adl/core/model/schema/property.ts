import { PropertySignature, PropertySignatureStructure, StructureKind, ts } from 'ts-morph';
import { normalizeIdentifier, TypeSyntax } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { addNullable } from '../../support/typescript';
import { NamedElement } from '../typescript/named-element';
import { SchemaInitializer } from '../typescript/schema';
import { TypeReference } from './type';

export interface PropertyInitializer extends SchemaInitializer {
  required?: boolean;
}

export class Property extends NamedElement<PropertySignature> {

  get readOnly() {
    return this.node.isReadonly();
  }

  set readOnly(value: boolean) {
    this.node.setIsReadonly(value);
  }

  get required() {
    return this.node.hasQuestionToken();
  }

  set required(value: boolean) {
    this.node.setHasQuestionToken(value);
  }

  constructor(node: PropertySignature) {
    super(node);
  }

  get type(): TypeReference {
    return {
      declaration: new TypeSyntax(this.node.getTypeNode()?.compilerNode ?? ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)),
      requiredReferences: [] // todo
    };
  }

  set type(typeReference: TypeReference) {
    this.node.setType(typeReference.declaration.text);
  }
}

export function createPropertySignature(name: string, typeReference: TypeReference, initializer?: PropertyInitializer): PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
    name: normalizeIdentifier(name),
    type: initializer?.nullable ? addNullable(typeReference.declaration.text) : typeReference.declaration.text,
    isReadonly: initializer?.readOnly,
    hasQuestionToken: !(initializer?.required),
    docs: createDocs(initializer),
  };
}

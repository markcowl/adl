import { values } from '@azure-tools/linq';
import { isAnonymous } from '@azure-tools/sourcemap';
import { InterfaceDeclaration, ts } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { addImportsTo } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { SchemaInitializer } from '../typescript/schema';
import { ModelPropertySignatureStructure, Property } from './property';
import { SchemaTypeReference, TypeReference } from './type';

export interface ModelTypeInitializer extends SchemaInitializer {
  parents?: Array<TypeReference>;
  properties?: Array<ModelPropertySignatureStructure>;
  requiredReferences?: Array<TypeReference>;
}

export function createModelType(api: ApiModel, identity: Identity, initializer?: ModelTypeInitializer): SchemaTypeReference {
  if (isAnonymous(identity)) {
    const properties = initializer?.properties ?? [];
    return {
      requiredReferences: properties.map(p => p.typeReference),
      declaration: new TypeSyntax(
        ts.createTypeLiteralNode(initializer?.properties?.map(p =>
          ts.createPropertySignature(
            p.isReadonly ? [ts.createModifier(ts.SyntaxKind.ReadonlyKeyword)] : undefined,
            p.name,
            p.hasQuestionToken ? ts.createToken(ts.SyntaxKind.QuestionToken) : undefined,
            p.typeReference.declaration.node,
            undefined))))
    };
  }

  const { name, file } = api.getNameAndFile(identity, 'model');

  const iface = file.addInterface({
    name,
    properties: initializer?.properties || [],
    extends: initializer?.parents ? initializer?.parents.map(each => each.declaration.text):[],
    docs: createDocs(initializer),
    isExported: true,
  });

  for (const each of values(initializer?.requiredReferences)) {
    addImportsTo(file,each);
  }

  return {
    declaration: new TypeSyntax(ts.createTypeReferenceNode(name, undefined)),
    sourceFile: file,
    requiredReferences: []
  };
}

export class ModelType extends NamedElement<InterfaceDeclaration> implements TypeReference {
  readonly isInline = false;
  readonly requiredReferences = [];

  constructor(node: InterfaceDeclaration) {
    super(node);
  }

  get declaration() {
    return new TypeSyntax(ts.createTypeReferenceNode(this.node.getName(), undefined));
  }

  get properties(): Array<Property> {
    return this.node.getProperties().map(each => new Property(each));
  }

  createProperty(name: string) {
    throw new Error('not implemented');
  }
}


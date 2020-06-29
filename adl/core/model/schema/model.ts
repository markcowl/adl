import { values } from '@azure-tools/linq';
import { isAnonymous } from '@azure-tools/sourcemap';
import { InterfaceDeclaration, PropertySignatureStructure } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { addImportsTo, getInnerText } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { SchemaInitializer } from '../typescript/schema';
import { Property } from './property';
import { SchemaTypeReference, TypeReference } from './type';

export interface ModelTypeInitializer extends SchemaInitializer { 
  parents: Array<TypeReference>;
  properties: Array<PropertySignatureStructure>;
  requiredReferences: Array<TypeReference>;
}

export function createModelType(api: ApiModel, identity: Identity, initializer?: Partial<ModelTypeInitializer> ): SchemaTypeReference {
  const { name, file } = api.getNameAndFile(identity, 'model');

  const iface = file.addInterface( {
    name,
    properties: initializer?.properties || [],
    extends: initializer?.parents ? initializer?.parents.map( each => each.declaration.text):[],
    docs: createDocs(initializer),
    isExported: true,
  });
  for (const each of values(initializer?.requiredReferences )) {
    addImportsTo(file,each);
  }
  
  return isAnonymous(identity) ? {
    declaration: new TypeSyntax( getInnerText(iface)),
    requiredReferences: initializer?.requiredReferences || [],
  } :  {
    declaration: new TypeSyntax(name),
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
    return new TypeSyntax(this.node.getName());
  }

  get properties(): Array<Property> {
    return this.node.getProperties().map(each => new Property(each));
  }

  createProperty(name: string) {
    //ssh
  }
}


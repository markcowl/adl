import { values } from '@azure-tools/linq';
import { isAnonymous } from '@azure-tools/sourcemap';
import { InterfaceDeclaration, PropertySignatureStructure } from 'ts-morph';
import { createDocs } from '../../support/doc-tag';
import { addImportsTo, getInnerText } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { PropertyElement } from './property';
import { SchemaInitializer } from './schema';
import { TypeReference } from './type';


export interface ObjectSchemaInitializer extends SchemaInitializer { 
  parents: Array<TypeReference>;
  properties: Array<PropertySignatureStructure>;
  requiredReferences: Array<TypeReference>;
}

export function createInterface(api: ApiModel, identity: Identity, initializer?: Partial<ObjectSchemaInitializer> ): TypeReference {
  const { name, file } = api.getNameAndFile(identity, 'model');

  const iface = file.addInterface( {
    name,
    properties: initializer?.properties || [],
    extends: initializer?.parents ? initializer?.parents.map( each => each.declaration):[],
    docs: createDocs(initializer),
    isExported: true,
  });
  for (const each of values(initializer?.requiredReferences )) {
   
    addImportsTo(file,each);
   
  }
  
  return isAnonymous(identity) ? {
    declaration: getInnerText(iface),
    requiredReferences: initializer?.requiredReferences || [],
  } :  {
    declaration: name,
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
    return this.node.getName();
  }

  getProperties(): Iterable<PropertyElement> {
    return this.node.getProperties().map(each => new PropertyElement(each));
  }

  createProperty(name: string) {
    //ssh
  }
}


import { Dictionary, values } from '@azure-tools/linq';
import { isAnonymous } from '@azure-tools/sourcemap';
import { PropertySignature, PropertySignatureStructure, StructureKind } from 'ts-morph';
import { normalizeIdentifier } from '../../support/codegen';
import { createDocs, getTagValue, setTag } from '../../support/doc-tag';
import { addImportsTo, addNullable, getInnerText } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { TypeReference } from './type';

export function createPropertySignature(name: string, typeReference: TypeReference, initializer?: PropertyInitializer): PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
    name: normalizeIdentifier(name),
    type: initializer?.nullable ? addNullable(typeReference.declaration) : typeReference.declaration,
    isReadonly: initializer?.readOnly,
    hasQuestionToken: !(initializer?.required),
    docs: createDocs(initializer),
  };
}

export interface PropertyInitializer extends SchemaInitializer { 
  required?: boolean;
}

export interface VersionedEntity { 
  since?: string;
  deprecated?: string;
  deleted?: string;
  renamed?: string;
}

export interface SchemaInitializer extends VersionedEntity {
  description?: string;
  summary?: string;
  clientName?: string;
  nullable?: boolean;
  readOnly?: boolean;
  tags?: Dictionary<string|undefined>;
}

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

export function createDictionary(elementTypeReference: TypeReference): TypeReference{
  return {
    declaration: `Dictionary<${elementTypeReference.declaration}>`,
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export function createArray(elementTypeReference: TypeReference): TypeReference {
  return {
    declaration: `Array<${elementTypeReference.declaration}>`,
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export interface Property extends PropertyImpl {
  required: boolean;
  readonly: boolean;
}

export class PropertyImpl extends NamedElement<PropertySignature> {
   
  /** indicates the properts is required */
  get required(): boolean {
    return this.node.hasQuestionToken();
  }
  set required(value: boolean) {
    this.node.setHasQuestionToken(value);
  }

  /**
   * Declares the property as "read only".  
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   */
  get readonly(): boolean {
    return this.node.isReadonly();
  }
  set readonly(value: boolean) {
    this.node.setIsReadonly(value);
  }

  /**
   * Declares the property as "write only". 
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   * 
   */
  get writeonly(): boolean {
    // todo: tear apart the property type looking for `& WriteOnly`
    return false;
  }
  set writeonly(value: boolean) {
    // todo: implement by adding a `& WriteOnly`
  }
 
  /**
   * the desired name when generating code.
   */
  get clientName(): string|undefined {    
    return getTagValue( this.node, 'clientName');
  }
  set clientName(value: string|undefined) {
    setTag(this.node, 'clientName', value);
  }

  constructor(node: PropertySignature) {
    super(node);
  }
}


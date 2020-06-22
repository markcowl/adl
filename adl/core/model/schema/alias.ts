import { isAnonymous } from '@azure-tools/sourcemap';
import { TypeAliasDeclaration } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { createDocs, Documentation } from '../../support/doc-tag';
import { addImportsTo } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { TypeReference } from './type';


export class AliasType extends NamedElement<TypeAliasDeclaration> implements TypeReference {
  declaration!: TypeSyntax;
  requiredReferences = [];

  isInline?: boolean;

  constructor(node: TypeAliasDeclaration) {
    super(node);
  }
}

export function createTypeAlias<T extends TypeReference>(api: ApiModel, identity: Identity, typeReference: T, docs?: Documentation): T {
  if (isAnonymous(identity)) {
    // if it doesn't have a name, just return the type reference instead.
    return typeReference;
  }
  const { name, file } = api.getNameAndFile(identity, 'alias');
 
  // we have to add the imports of the target to this file
  addImportsTo(file, typeReference);

  file.addTypeAlias({
    name,
    type: typeReference.declaration.text,
    typeParameters: typeReference.typeParameters,
    isExported: true,
    docs: createDocs(docs)
  });
  
  return {
    ...typeReference,
    declaration: new TypeSyntax(name),
    sourceFile: file,
    requiredReferences: [],
  };
}

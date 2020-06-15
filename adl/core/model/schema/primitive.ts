import { TypeReference } from './type';

export function createDictionary(elementTypeReference: TypeReference): TypeReference {
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
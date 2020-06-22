import { TypeReference } from './type';
import { TypeSyntax } from '../../support/codegen';

export function addDefault(type: TypeReference, defaultValue: any): TypeReference {
  return {
    ...type,
    declaration: new TypeSyntax(`${type.declaration} /* todo: add defaultValue '${JSON.stringify(defaultValue) }' */`)
  };

}

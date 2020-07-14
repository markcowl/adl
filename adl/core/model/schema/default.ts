import { TypeReference } from './type';

export function addDefault(type: TypeReference, defaultValue: any): TypeReference {
  // return {
  //   ...type,
  //   declaration: new TypeSyntax(`${type.declaration} /* todo: add defaultValue '${JSON.stringify(defaultValue) }' */`)
  // };
  return type;

}

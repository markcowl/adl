import { valueOf } from '@azure-tools/sourcemap';

/**  
 * Prepares a string for use as a TypeScript identifier.
 * 
 * if the string contains non alphanumeric characters, it is quoted.
 * 
*/
export function normalizeIdentifier(value: string) {
  value = valueOf(value);
  return /[^\w]/g.exec(value) ? `'${value.replace(/'/g, '\\\'')}'` : value;
}

export function stringLiteral(value: string) {
  return JSON.stringify(valueOf(value) || '');
}

export function normalizeName(value: string ) {
  return valueOf(value).replace(/[^\w]+/g, '_');
}
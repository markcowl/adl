import { printNode, ts, TypeParameterDeclarationStructure } from 'ts-morph';

/**
 * Prepares a string for use as a TypeScript interface member name
 *
 * If necessary, the string is quoted and escaped
*/
export function normalizeMemberName(value: string) {
  if (!isValidIdentifier(value, true)) {
    value = JSON.stringify(value);
  }

  return value;
}

/**
 * Prepares a string to be used as a TypeScript identifier
 *
 * If it is not a valid identifier, anything but A-Z, a-z, 0-9, _, or $ is
 * replaced by _. If it is still not a valid identifier, a leading _ is
 * prepended.
 */
export function normalizeIdentifier(value: string) {
  if (!isValidIdentifier(value)) {
    value = value.replace(/[^A-Za-z0-9_$]+/g, '_');
    if (!isValidIdentifier(value)) {
      value = '_' + value;
    }
  }

  return value;
}

/**
 * Determine if the given text is a valid TypeScript identifier
 *
 * @param allowReserved Allow reserved words in identifier
 */
export function isValidIdentifier(text: string, allowReserved = false) {
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    false,
    ts.LanguageVariant.Standard,
    text);

  const kind = scanner.scan();
  return (scanner.isIdentifier() || (allowReserved && scanner.isReservedWord())) &&
    scanner.getTokenPos() == 0 &&
    scanner.getTextPos() == text.length;
}

/**
 * Create a new intersection type compiler node.
 *
 * Avoid unnecessary parentheses when left is already an intersection.
 */
export function createIntersectionTypeNode(left: ts.TypeNode, right: ts.TypeNode) {
  const types = ts.isIntersectionTypeNode(left) ? [...left.types, right] : [left, right];
  return ts.createIntersectionTypeNode(types);
}

/**
 * Create a new intersection type compiler node.
 *
 * Avoid unnecessary parentheses when left is already an intersection.
 */
export function createUnionTypeNode(left: ts.TypeNode, right: ts.TypeNode) {
  const types = ts.isUnionTypeNode(left) ? [...left.types, right] : [left, right];
  return ts.createUnionTypeNode(types);
}

export class TypeSyntax {
  constructor(public readonly node: ts.TypeNode, preservedText?: string) {
    this.#text = preservedText;
  }

  #text?: string;
  get text() {
    if (this.#text === undefined) {
      this.#text = printNode(this.node);
    }
    return this.#text;
  }

  toString() {
    return this.text;
  }
}

export interface GenericTypeSyntax {
  type: TypeSyntax;
  typeParameters?: Array<TypeParameterDeclarationStructure>;
}


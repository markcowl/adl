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

export function isValidIdentifier(value: string, allowReserved = false) {
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    false,
    ts.LanguageVariant.Standard,
    value);

  const kind = scanner.scan();
  return (scanner.isIdentifier() || (allowReserved && scanner.isReservedWord())) &&
    scanner.getTokenPos() == 0 &&
    scanner.getTextPos() == value.length;
}

/**
 * Represents syntax for a type. Can be constructed from raw source text or from
 * a compiler node, and converted to either lazily.
 */
export class TypeSyntax {
  #text?: string;
  #node?: ts.TypeNode;

  constructor(declaration: string | ts.TypeNode) {
    if (typeof declaration === 'string') {
      this.#text = declaration;
    } else {
      this.#node = declaration;
    }
  }

  get node() {
    if (this.#node === undefined) {
      // NOTE: We currently get away with putting arbitrary syntax in a type
      // reference node's "name" here. It would be more correct to to parse the
      // text here into a proper tree, but that costs extra parsing and has the
      // side effect of losing trivia and formatting.
      this.#node = ts.createTypeReferenceNode(this.#text!, undefined);
    }
    return this.#node;
  }

  get text() {
    if (this.#text === undefined) {
      this.#text = printNode(this.#node!);
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


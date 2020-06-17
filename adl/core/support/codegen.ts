import { printNode, ts } from 'ts-morph';

/**  
 * Prepares a string for use as a TypeScript identifier.
 * 
 * if the string contains non alphanumeric characters, it is quoted.
 * 
*/
export function normalizeIdentifier(value: string) {
  return /[^\w]/g.exec(value) ? `'${value.replace(/'/g, '\\\'')}'` : value;
}

export function literal(value: string | number | boolean | null | undefined) {
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  if (typeof value == 'string') {
    return stringLiteral(value);
  }
  return value.toString();
}

export function stringLiteral(value: string) {
  return JSON.stringify(value || '');

}

export function normalizeName(value: string ) {
  if (/^[^a-zA-Z]/.test(value)) {
    // \w matches digits, but we can't lead with a digit
    value = `_${value}`;
  }

  return value.replace(/[^\w]+/g, '_');
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
    if (!this.#node) {
      // NOTE: We currently get away with putting arbitrary syntax in a type
      // reference node's "name" here. It would be more correct to to parse the
      // text here into a proper tree, but that costs extra parsing and has the
      // side effect of losing trivia and formatting.
      this.#node = ts.createTypeReferenceNode(this.#text!, undefined);
    }
    return this.#node;
  }

  get text() {
    if (!this.#text) {
      this.#text = printNode(this.#node!);
    }
    return this.#text;
  }

  toString() {
    return this.text;
  }
}


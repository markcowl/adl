/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { linq } from '@azure-tools/linq';
import { ParameterElement } from '../model/http/parameter';
import { Operation, OperationGroup, ResponseCollection, ResponseElement, ResultElement } from '../model/operation';
import { AliasType } from '../model/schema/alias';
import { EnumType, EnumValueElement } from '../model/schema/enum';
import { ModelType } from '../model/schema/model';
import { Property } from '../model/schema/property';
import { Declaration } from '../model/typescript/reference';

export type versionedElement = AliasType
  | Declaration<ResponseCollection>
  | Declaration<ResponseElement>
  | Declaration<ResultElement>
  | Declaration<ParameterElement>
  | EnumValueElement
  | EnumType
  | ModelType
  | Operation
  | OperationGroup
  | Property
  | ParameterElement

const acronyms = new Set([
  'ip', 'os', 'ms', 'vm', //  'ssl', 'https', 'http', ''
]);

declare global {
  interface Array<T> {
    joinWith(selector: (t: T) => string, separator?: string): string;
    last: T;
  }

  interface String {
    capitalize(): string;
    uncapitalize(): string;
    slim(): string;
  }
}

String.prototype.capitalize = function (): string {
  const result = <string>this;
  if (acronyms.has(result)) {
    return result.toUpperCase();
  }
  return result ? `${result.charAt(0).toUpperCase()}${result.substr(1)}` : result;
};
String.prototype.uncapitalize = function (): string {
  const result = <string>this;
  return result ? `${result.charAt(0).toLowerCase()}${result.substr(1)}` : result;
};


export function deconstruct(identifier: string | Array<string>): Array<string> {
  if (Array.isArray(identifier)) {
    return [...linq.values(identifier).selectMany(deconstruct)];
  }
  return `${identifier}`.
    replace(/([a-z]+)([A-Z])/g, '$1 $2').
    replace(/(\d+)([a-z|A-Z]+)/g, '$1 $2').
    replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').
    split(/[\W|_]+/).map(each => each.toLowerCase());
}

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const magnitude = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'septillion', 'octillion'];
const magvalues = [10 ** 3, 10 ** 6, 10 ** 9, 10 ** 12, 10 ** 15, 10 ** 18, 10 ** 21, 10 ** 24, 10 ** 27];

export function* convert(num: number): Iterable<string> {
  if (!num) {
    yield 'zero';
    return;
  }
  if (num > 1e+30) {
    yield 'lots';
    return;
  }

  if (num > 999) {
    for (let i = magvalues.length; i > -1; i--) {
      const c = magvalues[i];
      if (num > c) {
        yield* convert(Math.floor(num / c));
        yield magnitude[i];
        num = num % c;

      }
    }
  }
  if (num > 99) {
    yield ones[Math.floor(num / 100)];
    yield 'hundred';
    num %= 100;
  }
  if (num > 19) {
    yield tens[Math.floor(num / 10)];
    num %= 10;
  }
  if (num) {
    yield ones[num];
  }
}

export function fixLeadingNumber(identifier: Array<string>): Array<string> {
  if (identifier.length > 0 && /^\d+/.exec(identifier[0])) {
    return [...convert(parseInt(identifier[0])), ...identifier.slice(1)];
  }
  return identifier;
}

export function isEqual(s1: string, s2: string): boolean {
  // when s2 is undefined and s1 is the string 'undefined', it returns 0, making this true.
  // To prevent that, first we need to check if s2 is undefined.
  return s2 !== undefined && !!s1 && !s1.localeCompare(s2, undefined, { sensitivity: 'base' });
}

export function removeSequentialDuplicates(identifier: Iterable<string>) {
  const ids = [...identifier].filter(each => !!each);
  for (let i = 0; i < ids.length; i++) {
    while (isEqual(ids[i], ids[i - 1])) {
      ids.splice(i, 1);
    }
    while (isEqual(ids[i], ids[i - 2]) && isEqual(ids[i + 1], ids[i - 1])) {
      ids.splice(i, 2);
    }
  }

  return ids;
}

export function pascalCase(identifier: string | Array<string>, removeDuplicates = true): string {
  return identifier === undefined ? '' : typeof identifier === 'string' ?
    pascalCase(fixLeadingNumber(deconstruct(identifier)), removeDuplicates) :
    (removeDuplicates ? [...removeSequentialDuplicates(identifier)] : identifier).map(each => each.capitalize()).join('');
}


export function camelCase(identifier: string | Array<string>): string {
  if (typeof (identifier) === 'string') {
    return camelCase(fixLeadingNumber(deconstruct(identifier)));
  }
  switch (identifier.length) {
    case 0:
      return '';
    case 1:
      return identifier[0].uncapitalize();
  }
  return `${identifier[0].uncapitalize()}${pascalCase(identifier.slice(1))}`;
}


export function getPascalIdentifier(name: string): string {
  return pascalCase(fixLeadingNumber(deconstruct(name)));
}
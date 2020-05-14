import { Dictionary, length, values } from '@azure-tools/linq';
import { anonymous, isAnonymous, valueOf } from '@azure-tools/sourcemap';
import { EnumDeclaration, EnumMember } from 'ts-morph';
import { quoteForIdentifier } from '../../support/codegen';
import { getPath, referenceTo } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { Element } from '../element';
import { Schema } from './schema';

export class EnumValue extends Element {
  node: EnumMember;
  get targetMap() {
    return {
      ...super.targetMap,
      $: getPath(this.node),
      value: getPath(this.node, 'getValue')
    };
  }

  constructor(decl: EnumMember) {
    super();
    this.node = referenceTo(decl);
  }

  get value(): any {
    return this.node.getValue();
  }

  get name(): string | undefined {
    return this.node.getName();
  }
}

export interface Enum extends Schema {
  sealed?: boolean;
  addValue(name: string, value: string | number, initializer?: Partial<EnumValue>): EnumValue;
  readonly values: Array<EnumValue>;
}
class InlineEnum extends Schema implements Enum {
  // x : 'foo'|'bar'|'baz'
  sealed?: boolean | undefined;
  addValue(name: string, value: string | number, initializer?: Partial<EnumValue> | undefined): EnumValue {
    throw new Error('Method not implemented.');
  }
  get values(): Array<EnumValue> {
    return [];
  }

  constructor(decl: string) {
    super('enum');

  }
}
class EnumActual extends Schema implements Enum {
  node: EnumDeclaration;
  get targetMap(): Dictionary<any> {
    return {
      ...super.targetMap,
      $: getPath(this.node),
    };
  }

  get sealed() {
    return true;
  }
  set sealed(value: boolean) {
    // TODO: how do we represent unsealed
  }

  constructor(decl: EnumDeclaration) {
    super('enum');
    this.node = referenceTo(decl);
  }

  addValue(name: string, value: string | number): EnumValue {
    const em = this.node.addMember({
      name: quoteForIdentifier(valueOf(name)),
      value: valueOf(value),
    });

    const ev = new EnumValue(em).track({
      // he who creates a trackable object shall call track
      $: name,
      value: value
    });

    return ev;
  }

  get values(): Array<EnumValue> {
    return this.node.getMembers().map(each => new EnumValue(each));
  }
}

export interface NamedValue {
  name?: string;
  value: any;
  description?: string;
}


export function createEnum(api: ApiModel, elementSchema: Schema, initializer?: { name?: string; values?: Array<NamedValue> }) {
  // decide whether to make an inline enum or actual enum

  // are we dealing with strings/numbers?
  // do we have names or descriptions?
  // do we have a name for this enum
  const name = initializer?.name || anonymous('enum');
  const enumvalues = initializer?.values;

  if (length(enumvalues) > 0) {
    if (!isAnonymous(name)) {
      // make a enum type
      const existing = api.getEnum(name);

      for (const each of existing) {
        each.addJsDoc({ description: 'I think we emitted this before, reusing' });
        return new EnumActual(each);
      }

      const file = api.getEnumFile(name);

      const result = new EnumActual(file.addEnum({
        name: valueOf(name),
        isExported: true,
      })).track({
        // he who creates a trackable object shall call track
        $: name
      });

      for (const each of values(enumvalues)) {
        result.addValue(each.name || each.value, each.value);
      }

      return result;
    }
  }

  // make an inline enum
  const file = api.getAliasSourceFile();
  const result = new InlineEnum(`${enumvalues?.join('|')}`);
  return result;
}

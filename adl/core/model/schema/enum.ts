import { Dictionary, linq } from '@azure-tools/linq';
import { anonymous, isAnonymous, valueOf } from '@azure-tools/sourcemap';
import { EnumDeclaration, EnumMember } from 'ts-morph';
import { quoteForIdentifier } from '../../support/codegen';
import { getPath } from '../../support/typescript';
import { ApiModel } from '../api-model';
import { TSElement } from '../element';
import { Schema, TSSchema } from './schema';

export interface Enum extends Schema {
  extensible?: boolean;
  readonly values: Array<EnumValue>;
  addValue(value: EnumValue): EnumValue;
}

export interface EnumValue {
  name?: string;
  description?: string;
  value: any;
}

class GenuineEnumValue extends TSElement<EnumMember> implements EnumValue {
  get targetMap() {
    return {
      ...super.targetMap,
      $: getPath(this.node),
      value: getPath(this.node, 'getValue')
    };
  }

  constructor(node: EnumMember) {
    super(node);
  }

  get value(): any {
    return this.node.getValue();
  }

  get name(): string | undefined {
    return this.node.getName();
  }

  get description(): string | undefined {
    return this.getDocSummary();
  }
  set description(value: string | undefined) {
    this.setDocSummary(value);
  }
}

/**
 * An unnamed enum that has no names or descriptions, only values.
 * It can be inlined wherever used as value1 | ...  | valueN
 * Code emit is therefore deferred to referencers and this just holds the values.
 */
class InlineEnum extends Schema implements Enum {
  #values = new Array<any>();
  name = anonymous('enum');
  extensible = false;

  addValue(value: EnumValue) {
    if (value.name || value.description) {
      throw new Error('Inline enum values cannot be named or have descriptions.');
    }
    this.#values.push(value.value);
    return value;
  }

  get values() {
    return this.#values.map<EnumValue>(value => ({ value }));
  }

  constructor() {
    super('enum');
  }
}

class GenuineEnum extends TSSchema<EnumDeclaration> implements Enum {
  get targetMap(): Dictionary<any> {
    return {
      ...super.targetMap,
      $: getPath(this.node),
    };
  }

  get extensible() {
    return this.hasDocTag('extensible');
  }
  set extensible(value: boolean) {
    this.setDocTag('extensible', value);
  }

  constructor(node: EnumDeclaration) {
    super('enum', node);
  }

  addValue(value: EnumValue) {
    const name = valueOf(value.name) ?? value.value.toString();
    const val = valueOf(value.value);

    let member: EnumMember;

    switch (typeof val) {
      case 'string':
      case 'number':
        member = this.node.addMember({
          name: quoteForIdentifier(name),
          value: val
        });
        break;

      default:
        throw new Error('Cannot add non-string, non-numeric value to enum');
    }

    const result = new GenuineEnumValue(member);
    result.description = value.description;
    return result;
  }
  get values(): Array<EnumValue> {
    return this.node.getMembers().map<EnumValue>(each => new GenuineEnumValue(each));
  }
}


let generatedEnumCounter = 1;
function generateTypeName() {
  return `enum${generatedEnumCounter++}`;
}

export function createEnum(api: ApiModel, values: Array<EnumValue>, initializer?: Partial<Enum>) {
  const name = initializer?.name ?? anonymous('enum');

  if (!isAnonymous(name)) {
    const existing = api.getEnum(name);
    if (existing) {
      // TODO: This should be made reusable, determine that the definitions are fully the same, then emit nothing.
      existing.addJsDoc({ tags: [{ tagName: 'todo-temporary-reuse-marker' }] });
      return new GenuineEnum(existing);
    }
  }

  const summary = initializer?.summary;
  let result: Enum;

  // We can only be inline if we have no names or summaries
  if (!isAnonymous(name) || summary || linq.values(values).any(v => !!(v.name || v.description))) {
    const enumName = isAnonymous(name) ? generateTypeName() : valueOf(name);
    const file = api.getEnumFile(enumName);
    const type = file.addEnum({ name: enumName, isExported: true });
    result = new GenuineEnum(type);
  } else {
    result = new InlineEnum();
  }

  for (const each of values) {
    result.addValue(each);
  }

  result.initialize(initializer);
  return result;
}
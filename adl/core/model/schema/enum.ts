import { isAnonymous } from '@azure-tools/sourcemap';
import { EnumDeclaration, EnumMember, ts } from 'ts-morph';
import { normalizeMemberName, TypeSyntax } from '../../support/codegen';
import { createDocs, hasTag, setTag } from '../../support/doc-tag';
import { ApiModel } from '../api-model';
import { Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { SchemaInitializer } from '../typescript/schema';
import { TypeReference } from './type';

export interface EnumInitializer extends SchemaInitializer {
  extensible?: boolean;
}

export interface EnumValue {
  name?: string;
  summary?: string;
  value: any;
}

export function createEnum(api: ApiModel, identity: Identity, values: Array<EnumValue>, initializer?: EnumInitializer): TypeReference {
  if (!isAnonymous(identity)) {
    const { name, file } = api.getNameAndFile(identity, 'enum');

    const existing = api.getEnum(name);
    if (existing) {
      // enums are a bit funny -- they can define their name inside the x-ms-enum declaration
      // which means there can be multiple declarations for the same enum
      // so, we just return the existing enum by name
      return {
        declaration: new TypeSyntax(existing.getName()),
        sourceFile: file,
        requiredReferences: [],
      };
    }

    // create the definition all at once.
    const type = file.addEnum({
      name,
      isExported: true,
      members: values.map(value => ({
        name: value.name || normalizeMemberName(value.value),
        value: typeof value.value !== 'string' && typeof value.value !== 'number' ?
          `/* ${typeof value.value} */${value.value}` :  // TODO: how would we represent enum of non-string, non-number?
          value.value,
        docs: createDocs(value)
      })),
      docs: createDocs(initializer)
    });

    // return the reference to this enum
    return {
      declaration: new TypeSyntax(name),
      sourceFile: file,
      requiredReferences: []
    };
  }

  // anonymous enums are far simpler, since they are purely inline information
  return {
    declaration: new TypeSyntax(
      ts.createUnionTypeNode(
        values.map(v => ts.createLiteralTypeNode(ts.createLiteral(v.value))))),
    requiredReferences: [],
  };
}

export class EnumValueElement extends NamedElement<EnumMember> {
  constructor(node: EnumMember) {
    super(node);
  }

  get value(): string | number | undefined {
    return this.node.getValue();
  }
  set value(v: string | number | undefined) {
    if (v == undefined) {
      this.node.removeInitializer();
      return;
    }
    this.node.setValue(v);
  }
}

export class EnumType extends NamedElement<EnumDeclaration> implements TypeReference {
  readonly isInline = false;
  readonly requiredReferences = [];

  constructor(node: EnumDeclaration) {
    super(node);
  }

  get declaration() {
    return new TypeSyntax(this.node.getName());
  }

  get values(): Array<EnumValueElement> {
    return this.node.getMembers().map(each => new EnumValueElement(each));
  }

  get extensible(): boolean {
    return hasTag(this.node, 'extensible');
  }
  set extensible(value: boolean) {
    setTag(this.node, 'extensible', value);
  }

  createValue() {
    throw new Error('not implemented');
  }
}

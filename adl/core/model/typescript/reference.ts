import { InterfaceDeclaration, Node, TypeAliasDeclaration } from 'ts-morph';
import { NamedElement } from './named-element';

export function isDeclaration<T>(instance: T | Declaration<T>): instance is Declaration<T> {
  return !!((<any>instance).target);
}

export type Constructor<P,T> = { new(n: P): T };

export class Declaration<T, CT = Node> extends NamedElement<InterfaceDeclaration | TypeAliasDeclaration>  {
  constructor(node: InterfaceDeclaration | TypeAliasDeclaration, private ctor: Constructor<any,T>) {
    super(node);
  }
  #target?: T;

  get target(): T {
    if(this.#target) {
      return this.#target;
    }

    if(Node.isInterfaceDeclaration(this.node)) {
      return this.#target = new this.ctor(this.node);
    }

    if(Node.isTypeAliasDeclaration(this.node)) {
      const t= this.node.getTypeNode();
      if(t) {
        return this.#target = new this.ctor(t);
      }
    }

    throw new Error('Cant create target');
  }
}


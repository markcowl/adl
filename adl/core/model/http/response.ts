import { Node, TypeParameterDeclaration } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { expandLiterals } from '../../support/typescript';
import * as base from '../operation';
import { TypeReference } from '../schema/type';
import { Reference } from '../typescript/reference';

export class ResponseCriteria extends base.ResponseCriteria {
  get codes(): Array<string | number| TypeParameterDeclaration> {
    const parameter = this.node.getParameter('code');
    if (parameter) {
      const type = parameter.getTypeNode();
      if (type) {
        return expandLiterals(type);
      }
    }

    return [];
  }

  get mediaTypes(): Array<string | TypeParameterDeclaration> {
    const parameter = this.node.getParameter('mediaType');
    if (parameter) {
      const type = parameter.getTypeNode();
      if (type) {
        return expandLiterals(type, false);
      }
    }

    return [];
  }
}

export class Result extends base.Result {
  get body(): TypeReference | undefined {
    if (Node.isTypeLiteralNode(this.node) || Node.isInterfaceDeclaration(this.node)) {
      const bodyType =  this.node.getProperty('body');
      if (bodyType) {
        return {
          declaration: new TypeSyntax(bodyType.getTypeNode()?.compilerNode ?? 'any'),
          requiredReferences: []
        };
      }
    }
    return undefined;
  }

  get headers(): Array<TypeReference> {
    return []; // TODO
  }

  get isException(): boolean | TypeParameterDeclaration {
    return false;
  }

  get message(): string | undefined | TypeParameterDeclaration  {
    return undefined;
  }
}

export class Response extends base.Response {
  get criteria(): ResponseCriteria {
    return new ResponseCriteria(this.node);
  }
  get result(): Result | Reference<Result> {
    const type = this.node.getReturnTypeNodeOrThrow();

    if (Node.isTypeLiteralNode(type)) {
      return new Result(type);
    }

    if (Node.isTypeReferenceNode(type)) {
      return new Reference(type, Result);
    }

    throw new Error(`Invalid result type: ${this.node.getKindName()}`);
  }
}


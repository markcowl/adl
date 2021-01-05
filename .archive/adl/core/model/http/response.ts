import { Node, ts, TypeParameterDeclaration } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { expandLiterals, getDefinition } from '../../support/typescript';
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
    const bodyType =  this.node.getProperty('body');
    if (bodyType) {
      return {
        declaration: new TypeSyntax(bodyType.getTypeNode()?.compilerNode ?? ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)),
        requiredReferences: []
      };
    }

    return undefined;
  }

  get headers(): Array<TypeReference> {
    const headersType = this.node.getProperty('headers')?.getTypeNode();
    if (headersType && Node.isTupleTypeNode(headersType)) {
      return headersType.getElementTypeNodes().map(t => ({
        declaration: new TypeSyntax(t.compilerNode ?? ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)),
        requiredReferences: []
      }));
    }

    return [];
  }

  get isException(): boolean | TypeParameterDeclaration {
    const isExceptionType = this.node.getProperty('isException')?.getTypeNode();
    if (!isExceptionType) {
      return false;
    }

    if (Node.isLiteralTypeNode(isExceptionType)) {
      const literal = isExceptionType.getLiteral();
      if (Node.isBooleanLiteral(literal)) {
        return literal.getLiteralValue();
      }
    }

    if (Node.isTypeReferenceNode(isExceptionType)) {
      const definition = getDefinition(isExceptionType);
      if (Node.isTypeParameterDeclaration(definition)) {
        return definition;
      }
    }

    throw new Error('Invalid type for isException');
  }

  get message(): string | undefined | TypeParameterDeclaration  {
    const messageType = this.node.getProperty('message')?.getTypeNode();
    if (!messageType) {
      return undefined;
    }

    if (Node.isLiteralTypeNode(messageType)) {
      const literal = messageType.getLiteral();
      if (Node.isStringLiteral(literal)) {
        return literal.getLiteralValue();
      }
    }

    if (Node.isTypeReferenceNode(messageType)) {
      const definition = getDefinition(messageType);
      if (Node.isTypeParameterDeclaration(definition)) {
        return definition;
      }
    }

    throw new Error('Invalid type for message');
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


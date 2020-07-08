import { FunctionTypeNode, InterfaceDeclaration, MethodSignature, Node, ParameterDeclaration, TupleTypeNode, TypeLiteralNode } from 'ts-morph';
import { NamedElement } from './typescript/named-element';
import { Reference } from './typescript/reference';
import { TypedElement } from './typescript/typed-element';
import { TSElement } from './typescript/typescript-element';

export abstract class ResponseCollection extends TSElement<TupleTypeNode> {
  static isAllowedNode(node: Node): node is TupleTypeNode {
    return Node.isTupleTypeNode(node);
  }

  /**
   * returns the collection of responses
   */
  abstract get responses(): ReadonlyArray<Response | Reference<Response | ResponseCollection>>;

  /**
   * Adds a new response to this collection
   */
  createResponse() {
    throw new Error('not implemented');
  }

  /**
   * Adds a response to this collection using a globally defined response
   */
  addResponse(declaration: Reference<Response>) {
    throw new Error('not implemented');
  }
}

export abstract class Parameter extends TypedElement<ParameterDeclaration> {
  static isAllowedNode(node: Node): node is ParameterDeclaration {
    return Node.isParameterDeclaration(node);
  }
}

/**
 * A Result describes a single output from an operation.
 *
 */
export abstract class Result extends TSElement<TypeLiteralNode | InterfaceDeclaration> {
  static isAllowedNode(node: Node): node is TypeLiteralNode | InterfaceDeclaration {
    return Node.isTypeLiteralNode(node) || Node.isInterfaceDeclaration(node);
  }
}

export abstract class ResponseCriteria extends TSElement<FunctionTypeNode> {
}

/**
 * A Response is the combination of the Criteria and the Result for a possible output from an operation.
 */
export abstract class Response extends TSElement<FunctionTypeNode> {
  static isAllowedNode(node: Node): node is FunctionTypeNode {
    return Node.isFunctionTypeNode(node);
  }

  abstract readonly criteria: ResponseCriteria;
  abstract readonly result?: Result | Reference<Result>;

  /**
   * Creates a new inline Result (removes any previous delared result)
   *
   * (if you want to set the result to a globally defined result, use {@link setResult})
   */
  createResult() {
    throw new Error('not implemented');
  }

  setResult() {
    throw new Error('not implemented');
  }

}

export abstract class OperationGroup extends NamedElement<InterfaceDeclaration>  {
  abstract get operations(): Array<Operation>;

  get extends(): Array<string> {
    return [];
  }
}

export abstract class Operation extends NamedElement<MethodSignature> {
  abstract get parameters(): ReadonlyArray<Parameter>;

  /**
   * creates a new parameter in this operation
   */
  createParameter(name: string) {
    throw new Error('not implemented');
  }

  /**
   * returns the Response for this operation as either a ResponseCollection the declaration of the ResponseCollection
   */
  abstract get responseCollection(): ResponseCollection | Reference<ResponseCollection> | undefined;

  /**
   * creates a new Response collection as a literal on this operation
   *
   * (if you want to use a declared response declaration, use {@link setResponse} )
   */
  createResponseCollection(){
    throw new Error('not implemented');
  }

  /**
  * Sets the response for this operation to a declaration of a ResponseCollection
  *
  * (if you want to create a fresh inline response declaration, use {@link createResponse} )
  * @param response
  */
  setResponseCollection(value: Reference<ResponseCollection>) {
    throw new Error('not implemented');
  }

  /**
   * Removes the response collection (if any) from this operation.
   *
   * does not alter the declaration if the current response is declared globally.
   */
  removeResponse(){
    throw new Error('not implemented');
  }
}

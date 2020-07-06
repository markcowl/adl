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
    // todo
  }

  /**
   * Adds a response to this collection using a globally defined response
   */
  addResponse(declaration: Reference<Response>) {
    //todo
  }
}

export class Parameter extends TypedElement<ParameterDeclaration> {
  static isAllowedNode(node: Node): node is ParameterDeclaration {
    return Node.isParameterDeclaration(node);
  }
}

/**
 * A Result describes a single output from an operation.
 *
 */
export class Result extends TSElement<TypeLiteralNode | InterfaceDeclaration> {
  static isAllowedNode(node: Node): node is TypeLiteralNode | InterfaceDeclaration {
    return Node.isTypeLiteralNode(node) || Node.isInterfaceDeclaration(node); 
  }
}

export class ResponseCriteria extends TSElement<FunctionTypeNode> {
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

    // todo
  }

  setResult() {
    // todo
  }

}

export abstract class OperationGroup extends NamedElement<InterfaceDeclaration>  {
  abstract get operations(): Array<Operation>;

  get extends(): Array<string> {
    return [];
  }
}

export class Operation extends NamedElement<MethodSignature> {
  get parameters(): ReadonlyArray<Parameter> {
    return this.node.getParameters().map(each => new Parameter(each));
  }

  /**
   * creates a new parameter in this operation
   */
  createParameter(name: string,) {
    // todo
  }

  /**
   * returns the Response for this operation as either a ResponseCollection the declaration of the ResponseCollection
   */
  get responseCollection(): ResponseCollection | Reference<ResponseCollection> | undefined {
    throw new Error('Not Implemented');
  }

  /**
   * creates a new Response collection as a literal on this operation
   *
   * (if you want to use a declared response declaration, use {@link setResponse} )
   */
  createResponseCollection(){
    // todo
  }

  /**
  * Sets the response for this operation to a declaration of a ResponseCollection
  *
  * (if you want to create a fresh inline response declaration, use {@link createResponse} )
  * @param response
  */
  setResponseCollection(value: Reference<ResponseCollection>) {
    //todo
  }

  /**
   * Removes the response collection (if any) from this operation.
   *
   * does not alter the declaration if the current response is declared globally.
   */
  removeResponse(){
    // todo
  }


}

import { fail } from 'assert';
import { FunctionTypeNode, Node } from 'ts-morph';
import { TypeSyntax } from '../../support/codegen';
import { expandLiterals } from '../../support/typescript';
import * as base from '../operation';
import { HeaderTypeReference, TypeReference } from '../schema/type';
import { Identity } from '../types';
import { Declaration } from '../typescript/reference';

export class ResponseCriteria extends base.ResponseCriteria {
  
  get codes(): Array<string|number> {
    const p = this.node.getParameter('code');
    if( p ) {
      const t = p.getTypeNode();
      if( t ) {
        return expandLiterals(t);
      }

    }
    return [];
  }
 
  get mediaTypes( ): Array<string> {
    const p = this.node.getParameter('mediaType');
    if (p) {
      const t = p.getTypeNode();
      if (t) {
        return expandLiterals(t).map( each => each.toString());
      }
    }
    return [];
  }
}

export class ResultElement extends base.ResultElement {
  get body(): TypeReference |undefined {
    if (Node.isTypeLiteralNode(this.node) || Node.isInterfaceDeclaration(this.node)) { 
      const bodyType =  this.node.getProperty('body');
      if( bodyType) {
        return {
          declaration: new TypeSyntax(bodyType.getText()),
          requiredReferences: []
        };
      }
    }
    return undefined;
  }
  headers!: Array<TypeReference>;
  isException?: boolean;
  message?: string;

  
}

export class ResponseElement extends base.ResponseElement {
  constructor(node: FunctionTypeNode) {
    super(node);
  }
  get criteria(): ResponseCriteria {
    return new ResponseCriteria(this.node);
  }
  
  // temp while working on code: 
  // eslint-disable-next-line getter-return
  get result(): ResultElement | Declaration<ResultElement> {
    const rt = this.node.getReturnType();
    const s= rt.getSymbol();
    const d = s?.getDeclarations()?.[0];
    if( d ) {
      if( Node.isTypeLiteralNode(d)) {
      // we've got an inline declaration
        return new ResultElement(d);
      }
      if( Node.isTypeReferenceNode(d)) {
      // we've got a reference to the declaration
        const target = d?.getTypeName()?.getSymbol()?.getDeclarations()?.[0];
        if (target && (Node.isTypeAliasDeclaration(target) || Node.isInterfaceDeclaration(target))) {
          return new Declaration(target, ResultElement);
        }
      }
      if (Node.isInterfaceDeclaration(d)) {
        return new Declaration(d, ResultElement);
      }
    }
    fail('does not look like a result element');
  }
}

export class Response extends base.Response {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  headers = new Array<HeaderTypeReference>();

  /**
   * 
   * @param name the name of this response
   * @param mediaType the IANA media response that this maps to.
   * @param initializer object initializer for the response.
   */
  constructor(public name: Identity,public mediaType: string, initializer?: Partial<Response> ) {
    super();
    this.initialize(initializer);
  }
}

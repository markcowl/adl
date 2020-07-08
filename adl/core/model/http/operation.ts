import { fail } from 'assert';
import { FunctionTypeNode, JSDocTagStructure, MethodSignatureStructure, Node, ParameterDeclarationStructure, printNode, StructureKind, ts, TupleTypeNode } from 'ts-morph';
import { normalizeIdentifier, normalizeName } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { Alias } from '../alias';
import { ApiModel } from '../api-model';
import * as base from '../operation';
import { ReferenceInfo } from '../project/reference';
import { HeaderTypeReference, ParameterTypeReference, RequestBodyTypeReference, ResponseTypeReference, TypeReference } from '../schema/type';
import { ElementFactory, Reference } from '../typescript/reference';
import { VersionedElement } from '../typescript/versioned-element';
import { Parameter } from './parameter';
import { Response } from './response';


export enum Method {
  Get = 'GET',
  Put = 'PUT',
  Post = 'POST',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Head = 'HEAD',
  Patch = 'PATCH',
  Trace = 'TRACE'
}

export class OperationGroup extends base.OperationGroup {

  get operations(): Array<Operation> {
    return this.node.getMethods().map(each => new Operation(each));
  }

  /**
   * Creates a new HttpOperation in this operation group.
   */
  createOperation() {
    // todo
  }
}

class ResponseOrResponseCollectionFactory implements ElementFactory<Response | ResponseCollection> {
  createElement(node: FunctionTypeNode | TupleTypeNode): Response | ResponseCollection {
    return Node.isFunctionTypeNode(node) ? new Response(node) : new ResponseCollection(node);
  }
  isAllowedNode(node: Node): node is FunctionTypeNode | TupleTypeNode {
    return Node.isFunctionTypeNode(node) || Node.isTupleTypeNode(node);
  }
}

const ResponseOrResponseCollection = new ResponseOrResponseCollectionFactory();

export class ResponseCollection extends base.ResponseCollection {
  get responses(): ReadonlyArray<Response | Reference<Response | ResponseCollection>> {
    return this.node.getElementTypeNodes().map(each => {
      if (Node.isFunctionTypeNode(each)) {
        return new Response(each);
      }
      if (Node.isTypeReferenceNode(each)) {
        return new Reference(each, ResponseOrResponseCollection);
      }
      fail('Invalid response type');
    });
  }
}

export class Operation extends base.Operation {

  /** The HTTP method used and the path operated upon. */
  get path(): string {
    return this.annotations?.get('http')[0]?.content || '';
  }
  set path(value: string) {
    this.annotations?.set('http', `${this.method} ${value}`);
  }

  get method(): Method {
    return <Method>(this.annotations?.get('http')[0]?.identity?.toUpperCase() || '');
  }
  set method(value: Method) {
    this.annotations?.set('http', `${value} ${this.path}`);
  }

  get parameters(){
    return this.node.getParameters().map(p => new Parameter(p));
  }

  get responseCollection(): ResponseCollection | Reference<ResponseCollection> | undefined {
    const returnType = this.node.getReturnTypeNode();

    if (!returnType) {
      return undefined;
    }

    if (Node.isTupleTypeNode(returnType)) {
      return new ResponseCollection(returnType);
    }

    if (Node.isTypeReferenceNode(returnType)) {
      return new Reference(returnType, ResponseCollection);
    }

    throw new Error('Invalid repsonse collection type');
  }

  /**
   * Authentication requirements for this operation, which override those specified globally.
   *
   * Only one of the elements in the array needs to be satisfied to authorize a request.
   */
  // readonly authenticationRequirements: Collection<AuthenticationRequirement>;

  /** Connections for this operation, which override those specified globally. */
  // readonly connections: Collection<Connection>;
}

export interface OperationInitializer extends VersionedElement {
  description: string;
  summary: string;
  tags: Array<string>;
  parameters: Array<ParameterTypeReference>;
  requestBody: RequestBodyTypeReference;
  responses: Array<ResponseTypeReference>;
  references: Array<ReferenceInfo>;
}

export interface OperationStructure extends MethodSignatureStructure {
  group: string;
}

export function createOperationGroup(
  api: ApiModel,
  group: string,
  operations: Array<MethodSignatureStructure>
) {
  const file = api.getFile(group, 'group');
  file.addInterface({
    name: group,
    isExported: true,
    methods: operations,
  });
}

export function createOperationStructure(
  method: Method,
  path: string,
  group: string,
  name: string,
  initializer: Partial<OperationInitializer>
): OperationStructure {

  const parameterStructures = createParameterStructures(initializer.parameters);
  const requestStructures = createRequestStructures(initializer.requestBody);
  const responseStructures = createResponseStructures(initializer.responses);
  const tagStructures = createTagStructures(initializer.tags);
  const pathStructure = createPathStructure(method, path);

  return {
    kind: StructureKind.MethodSignature,
    group: normalizeIdentifier(group),
    name: normalizeIdentifier(name),
    returnType: responseStructures.type,
    parameters: [
      ...parameterStructures.parameters,
      ...requestStructures.parameters
    ],
    docs: createDocs(initializer, [
      pathStructure,
      ...tagStructures,
      ...parameterStructures.tags,
      ...requestStructures.tags,
      ...responseStructures.tags
    ]),
  };
}

function createPathStructure(method: Method, path: string): JSDocTagStructure {
  return {
    kind: StructureKind.JSDocTag,
    tagName: 'http',
    text: `${method.toUpperCase()} ${path}`,
  };
}

function createTagStructures(tags?: Array<string>) {
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of tags ?? []) {
    tagStructures.push({
      kind: StructureKind.JSDocTag,
      tagName: 'tag',
      text: each
    });
  }

  return tagStructures;
}

function createParameterStructures(parameters?: Array<ParameterTypeReference>) {
  const parameterStructures = new Array<ParameterDeclarationStructure>();
  const tagStructures = new Array<JSDocTagStructure>();

  for (const parameter of parameters ?? []) {
    const name = normalizeName(parameter.name);
    const type = parameter.declaration.text;

    parameterStructures.push({
      kind: StructureKind.Parameter,
      hasQuestionToken: !parameter.required,
      name,
      type,
    });

    if (parameter.description) {
      const doc = `${name} - ${parameter.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'param',
        text: doc,
      });
    }
  }

  return { parameters: parameterStructures, tags: tagStructures };
}

function createRequestStructures(requestBody?: RequestBodyTypeReference) {
  const parameterStructures = new Array<ParameterDeclarationStructure>();
  const tagStructures = new Array<JSDocTagStructure>();

  if (requestBody) {
    parameterStructures.push({
      kind: StructureKind.Parameter,
      hasQuestionToken: !requestBody.required,
      name: 'body',
      type: requestBody.declaration.text,
    });

    if (requestBody.description) {
      const doc = `body - ${requestBody.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'param',
        text: doc,
      });
    }
  }

  return { parameters: parameterStructures, tags: tagStructures };
}

function createResponseStructures(responses?: Array<ResponseTypeReference>) {
  const reponseTypes = new Array<ts.FunctionTypeNode>();
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of responses ?? []) {
    const response = each instanceof Alias ? each.target : each;
    const type = response.declaration.node;
    reponseTypes.push(type);

    if (response.description) {
      const doc = `${response.code} - ${response.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'return',
        text: doc,
      });
    }
  }

  const returnType = ts.createTupleTypeNode(reponseTypes);
  return {
    type: printNode(returnType),
    tags: tagStructures
  };
}

function getResponseCodeParameter(code: string | ts.TypeNode) {
  if (!code || code == 'default') {
    return undefined;
  }

  if (typeof code === 'string') {
    const literal = /^\d+$/.test(code) ? ts.createNumericLiteral(code) : ts.createStringLiteral(code);
    code = ts.createLiteralTypeNode(literal);
  }

  return ts.createParameter(undefined, undefined, undefined, 'code', undefined, code);
}

function getMediaTypeParameter(mediaType?: string | ts.TypeNode) {
  if (!mediaType) {
    return undefined;
  }

  if (typeof mediaType === 'string') {
    mediaType = ts.createLiteralTypeNode(ts.createStringLiteral(mediaType));
  }

  return ts.createParameter(undefined, undefined, undefined, 'mediaType', undefined, mediaType);
}

export function getMediaTypeUnion(mediaTypes?: Array<string>) {
  if (!mediaTypes || mediaTypes.length == 0) {
    return undefined;
  }

  return ts.createUnionTypeNode(
    mediaTypes.map(
      m => ts.createLiteralTypeNode(ts.createStringLiteral(m))));
}

function getResponseCriteria(code: string | ts.TypeNode, mediaType?: string | ts.TypeNode) {
  const parameters = new Array<ts.ParameterDeclaration>();

  const codeParameter = getResponseCodeParameter(code);
  if (codeParameter) {
    parameters.push(codeParameter);
  }

  const mediaTypeParameter = getMediaTypeParameter(mediaType);
  if (mediaTypeParameter) {
    parameters.push(mediaTypeParameter);
  }

  return parameters;
}

function getResponseDefinition(
  typeref?: TypeReference,
  headers?: Array<HeaderTypeReference>,
  isException?: boolean | ts.TypeNode,
) {
  const properties = new Array<ts.PropertySignature>();

  if (typeref) {
    const responseType = typeref.declaration.node;
    properties.push(ts.createPropertySignature(undefined, 'body', undefined, responseType, undefined));
  }

  if (headers && headers.length > 0) {
    const headerType = ts.createTupleTypeNode(headers.map(h => h.declaration.node));
    properties.push(ts.createPropertySignature(undefined, 'headers', undefined, headerType, undefined));
  }

  if (isException !== false && isException !== undefined) {
    if (isException === true) {
      isException = ts.createLiteralTypeNode(ts.createTrue());
    }
    properties.push(
      ts.createPropertySignature(undefined, 'isException', undefined, isException, undefined));
  }

  return ts.createTypeLiteralNode(properties);
}

export function getResponseType(
  code: string | ts.TypeNode,
  isException?: boolean | ts.TypeNode,
  mediaType?: string | ts.TypeNode,
  typeref?: TypeReference,
  headers?: Array<HeaderTypeReference>,
) {
  return ts.createFunctionTypeNode(
    undefined,
    getResponseCriteria(code, mediaType),
    getResponseDefinition(typeref, headers, isException));
}

import { RequestBodyReference } from '@azure-tools/openapi/dist/v3';
import { isAnonymous } from '@azure-tools/sourcemap';
import { JSDocTagStructure, MethodSignatureStructure, ParameterDeclarationStructure, printNode, StructureKind, ts } from 'ts-morph';
import { normalizeIdentifier, normalizeName } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { Alias } from '../alias';
import { ApiModel } from '../api-model';
import * as base from '../operation';
import { Reference } from '../reference';
import { VersionedEntity } from '../schema/object';
import { ParameterTypeReference, RequestBodyTypeReference } from '../schema/type';
import { Collection, Identity } from '../types';
import { Parameter, ParameterType } from './parameter';
import { AuthenticationRequirement, Connection } from './protocol';
import { Request } from './request';
import { Response } from './response';

export enum Method {
  Get = 'get',
  Put = 'put',
  Post = 'post',
  Delete = 'delete',
  Options = 'options',
  Head = 'head',
  Patch = 'patch',
  Trace = 'trace'
}

export interface Path {
  method: Method;
  path: string;
}

export interface Operation extends base.Operation {
  /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
  readonly tags: Collection<string>;

  /** A group name to group this operation with others. */
  readonly group: string;

  /** A name for this operation within its group. */
  name: string;

  /** The HTTP method used and the path operated upon. */
  path: Path;

  /** parameters common to all the requests(overloads) for this operation */
  readonly parameters: Collection<Parameter | Alias<Parameter>>;

  /** possible requests that can be made for this operation (ie, overloads)  */
  readonly requests: Collection<Request | Alias<Request>>;

  /** non-error outputs from this operation */
  readonly responses: Collection<Response | Alias<Response>>;

  /** a collection of reference information regarding the operation  */
  readonly references: Collection<Reference>;

  /**
   * Authentication requirements for this operation, which override those specified globally.
   *
   * Only one of the elements in the array needs to be satisfied to authorize a request.
   */
  readonly authenticationRequirements: Collection<AuthenticationRequirement>;

  /** Connections for this operation, which override those specified globally. */
  readonly connections: Collection<Connection>;
}

export interface OperationInitializer extends VersionedEntity {
  description: string;
  summary: string;
  tags: Array<string>;
  parameters: Array<ParameterTypeReference>;
  requestBody: RequestBodyTypeReference;
  responses: Array<Response | Alias<Response>>;
  references: Array<Reference>;
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
  api: ApiModel,
  path: Path,
  group: string,
  name: string,
  initializer: Partial<OperationInitializer>
): OperationStructure {

  const parameterStructures = createParameterStructures(initializer.parameters);
  const requestStructures =  createRequestStructures(initializer.requestBody);
  const responseStructures = createResponseStructures(initializer.responses);
  const tagStructures = createTagStructures(initializer.tags);
  const pathStructure = createPathStructure(path);

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

function createPathStructure(path: Path): JSDocTagStructure {
  return {
    kind: StructureKind.JSDocTag,
    tagName: 'http', 
    text: `${path.method.toUpperCase()} ${path.path}`,
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

  for(const parameter of parameters ?? []) {
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

function createResponseStructures(
  responses?: Array<Response | Alias<Response>>,
  currentReturnType: ts.TypeNode = ts.createTupleTypeNode([])) {

  if (!ts.isTupleTypeNode(currentReturnType)) {
    throw new Error('Operation has invalid return type');
  }

  const reponseTypes = new Array<ts.FunctionTypeNode>();
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of responses ?? []) {
    const response = each instanceof Alias ? each.target : each;
    const type = getResponseType(response);
    reponseTypes.push(type);

    if (response.description) {
      const doc = `${response.name}|${response.mediaType} - ${response.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'return',
        text: doc,
      });
    }
  }

  const returnType = ts.createTupleTypeNode([
    ...currentReturnType.elementTypes, 
    ...reponseTypes
  ]);

  return { 
    type: printNode(returnType),
    tags: tagStructures
  };
}

function getParameterType(parameter: Parameter, chosenName: string) {
  const innerType = parameter.typeRef.declaration.text;
  const outerType = getOuterParameterType(parameter.type);
  const nameArg = parameter.name == chosenName ? '' : `, '${parameter.name}'`;

  if (outerType == 'Path' && nameArg == '') {
    return innerType;
  }

  return `${outerType}<${innerType}${nameArg}>`;
}

function getOuterParameterType(parameterType: ParameterType) {
  switch (parameterType) {
    case ParameterType.Cookie:
      return 'Cookie';
    case ParameterType.FormData:
      return 'FormData';
    case ParameterType.Header:
      return 'Header';
    case ParameterType.Path:
      return 'Path';
    case ParameterType.Query:
      return 'Query';
    default:
      throw new Error(`Invalid parameter type '${parameterType}'`);
  }
}

function getRequestType(request: Request, chosenName: string) {
  const innerType = request.typeRef.declaration;
  const outerType = 'Body';
  const mediaTypeArg = `, '${request.mediaType}'`;
  const nameArg = (!request.name || request.name == chosenName) ? '' : `, '${request.name}'`;
  return `${outerType}<${innerType}${mediaTypeArg}${nameArg}>`;
}

function getResponseCodeParameter(code: Identity) {
  if (isAnonymous(code) || code == 'default') {
    return undefined;
  }

  const literal = /^\d+$/.test(code) ? ts.createNumericLiteral(code) : ts.createStringLiteral(code);
  const literalType = ts.createLiteralTypeNode(literal);
  return ts.createParameter(undefined, undefined, undefined, 'code', undefined, literalType);
}

function getMediaTypeParameter(mediaType: string) {
  if (!mediaType) {
    return undefined;
  }

  const literal = ts.createStringLiteral(mediaType);
  const literalType = ts.createLiteralTypeNode(literal);
  return ts.createParameter(undefined, undefined, undefined, 'mediaType', undefined, literalType);
}

function getResponseCriteria(response: Response) {
  const parameters = new Array<ts.ParameterDeclaration>();

  const code = getResponseCodeParameter(response.name);
  if (code) {
    parameters.push(code);
  }

  const mediaType = getMediaTypeParameter(response.mediaType);
  if (mediaType) {
    parameters.push(mediaType);
  }

  return parameters;
}

function getResponseDefinition(response: Response) {
  const properties = new Array<ts.PropertySignature>();

  if (response.typeref) {
    const responseType = response.typeref.declaration.node;
    properties.push(ts.createPropertySignature(undefined, 'body', undefined, responseType, undefined));
  }

  if (response.headers.length > 0) {
    const headerType = ts.createTupleTypeNode(response.headers.map(h => h.declaration.node));
    properties.push(ts.createPropertySignature(undefined, 'headers', undefined, headerType, undefined));
  }

  if (response.isException) {
    const literalTrueType = ts.createLiteralTypeNode(ts.createTrue());
    properties.push(ts.createPropertySignature(undefined, 'isException', undefined, literalTrueType, undefined));
  }

  return ts.createTypeLiteralNode(properties);
}

function getResponseType(response: Response) {
  return ts.createFunctionTypeNode(
    undefined,
    getResponseCriteria(response),
    getResponseDefinition(response));
}


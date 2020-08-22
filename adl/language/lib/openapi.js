import { getDescription } from './decorators.js';
import {
  basePathForResource,
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  getResources,
  isBody,
  isStatus,
} from './rest.js';

let init = false;

const root = {
  swagger: '2.0',
  info: {},
  schemes: ['https'],
  paths: {},
  definitions: {},
  parameters: {},
};
let program;

export function onBuild(p, entity) {
  program = p;
  const emitter = createOAPIEmitter();
  emitter.emitOpenAPI();
}

export function operationId() {}

function createOAPIEmitter() {
  const root = {
    swagger: '2.0',
    info: {},
    schemes: ['https'],
    paths: {},
    definitions: {},
    parameters: {},
  };

  let currentBasePath = '';
  let currentPath = root.paths;
  let currentEndpoint;

  // map types to their schemas
  const schemas = new Map();

  // map types to their param nodes
  const params = new Map();

  return { emitOpenAPI };

  function emitOpenAPI(program) {
    for (let resource of getResources()) {
      emitResource(resource);
    }
    emitReferences();

    console.log(JSON.stringify(root, null, 4));
  }

  function emitResource(resource) {
    currentBasePath = basePathForResource(resource);

    for (const [name, prop] of resource.properties) {
      emitEndpoint(resource, prop);
    }
  }

  function getPathParameters(iface, prop) {
    return [
      ...(iface.parameters?.properties.values() ?? []),
      ...prop.parameters.properties.values(),
    ].filter((param) => getPathParamName(param) !== undefined);
  }

  /**
   * Translates endpoint names like `read` to REST verbs like `get`.
   * @param {string} name
   */
  function pathForEndpoint(name, pathParams, declaredPathParamNames) {
    const paramByName = new Map(pathParams.map((p) => [p.name, p]));
    const pathSegments = [];

    // for each param in the declared path parameters (e.g. /foo/{id} has one, id),
    // delete it because it doesn't need to be added to the path.
    for (const declaredParam of declaredPathParamNames) {
      const param = paramByName.get(declaredParam);
      if (!param) {
        throw new Error(
          `Path contains parameter ${declaredParam} but wasn't found in given parameters`
        );
      }

      paramByName.delete(declaredParam);
    }

    // for any remaining declared path params
    for (const name of paramByName.keys()) {
      pathSegments.push(name);
    }

    const verb = verbForEndpoint(name);
    if (verb) {
      return [verb, pathSegments];
    } else {
      return ['get', pathSegments, name];
    }
  }

  function verbForEndpoint(name) {
    switch (name) {
      case 'list':
        return 'get';
      case 'create':
        return 'post';
      case 'read':
        return 'get';
      case 'update':
        return 'get';
      case 'delete':
        return 'delete';
      case 'deleteAll':
        return 'delete';
    }
  }

  function emitEndpoint(resource, prop) {
    const declaredPathParamNames =
      currentBasePath.match(/\{\w+\}/g)?.map((s) => s.slice(1, -1)) ?? [];
    const params = getPathParameters(resource, prop);
    const [verb, newPathParams, subScope = ''] = pathForEndpoint(
      prop.name,
      params,
      declaredPathParamNames
    );
    const subpath =
      currentBasePath +
      (subScope ? '/' + subScope : '') +
      (newPathParams.length > 0
        ? '/' + newPathParams.map((p) => '{' + p + '}').join('/')
        : '');

    if (subpath === undefined) throw new Error('uhoh');

    if (!root.paths[subpath]) {
      root.paths[subpath] = {};
    }

    currentPath = root.paths[subpath];
    if (!currentPath[verb]) {
      currentPath[verb] = {};
    }
    currentEndpoint = currentPath[verb];
    currentEndpoint.summary = getDescription(prop);
    currentEndpoint.consumes = [];
    currentEndpoint.produces = [];
    currentEndpoint.parameters = [];
    currentEndpoint.responses = {};

    emitEndpointParameters(
      resource.parameters?.properties.values(),
      prop.parameters?.properties.values()
    );
    emitResponses(prop.returnType);
  }

  function emitResponses(responseType) {
    if (responseType.kind === 'Union') {
      for (const [i, option] of responseType.options.entries()) {
        emitResponseObject(option, i === 0 ? 200 : 'default');
      }
    } else {
      emitResponseObject(responseType);
    }
  }

  function emitResponseObject(responseModel, statusCode = 200) {
    if (
      responseModel.kind === 'Model' &&
      responseModel.assignmentType === undefined &&
      responseModel.properties.size === 0
    ) {
      currentEndpoint.responses[200] = {
        description: 'Null response',
      };

      return;
    }

    let contentType = 'application/json';
    const response = {
      headers: {},
      schema: getSchemaPlaceholder(responseModel),
    };

    const desc = getDescription(responseModel);
    if (desc) {
      response.description = desc;
    }

    // the model could be an array type
    if (responseModel.properties) {
      for (const [name, prop] of responseModel.properties) {
        const statusInfo = isStatus(prop);
        const headerInfo = getHeaderFieldName(prop);
        const desc = getDescription(prop);

        if (statusInfo) {
          // TODO: handle types other than number.
          statusCode = prop.type.value;
        } else if (headerInfo !== undefined) {
          if (
            (headerInfo === '' && name === 'contentType') ||
            headerInfo === 'contentType'
          ) {
            contentType = prop.type.value;
          } else {
            // TODO: handle types other than string.
            response.headers[headerInfo] = {
              type: 'string',
            };
          }
          if (desc) {
            response.headers[headerInfo].description = desc;
          }
        }
      }
    }

    if (!currentEndpoint.produces.includes(contentType)) {
      currentEndpoint.produces.push(contentType);
    }

    currentEndpoint.responses[statusCode] = response;
  }

  function getSchemaPlaceholder(type) {
    if (schemas.has(type)) {
      return schemas.get(type);
    }
    const builtIn = mapADLTypeToOpenAPI(type);
    if (builtIn) {
      return builtIn;
    }

    const placeholder = {};

    schemas.set(type, placeholder);
    return placeholder;
  }

  function getParamPlaceholder(field) {
    if (params.has(field)) {
      return params.get(field);
    }

    const placeholder = {};

    params.set(field, placeholder);
    return placeholder;
  }

  function emitEndpointParameters(resourceParams = [], methodParams = []) {
    const parameters = [...resourceParams, ...methodParams].filter(
      (p) => getPathParamName(p) === undefined
    );

    let emittedImplicitBodyParam = false;
    for (const param of parameters) {
      if (params.has(param)) {
        currentEndpoint.parameters.push(params.get(param));
      }
      const queryInfo = getQueryParamName(param);
      const headerInfo = getHeaderFieldName(param);
      const bodyInfo = isBody(param);

      if (queryInfo) {
        emitParameter(param, 'query');
      } else if (headerInfo) {
        emitParameter(param, 'header');
      } else if (bodyInfo) {
        emitParameter(param, 'body');
      } else {
        if (emittedImplicitBodyParam) {
          throw new Error('request has multiple body types');
        }
        emittedImplicitBodyParam = true;
        emitParameter(param, 'body');
      }
    }
  }

  function emitParameter(param, kind) {
    const ph = getParamPlaceholder(param);
    ph.name = param.name;
    ph.in = kind;
    ph.requred = !param.optional;
    ph.schema = getSchemaPlaceholder(param.type);
    ph.description = getDescription(param);

    if (kind === 'body') {
      const contentType =
        param.type.properties?.get('contentType')?.type.value ??
        'application/json';
      if (!currentEndpoint.consumes.includes(contentType)) {
        currentEndpoint.consumes.push(contentType);
      }
    }
    currentEndpoint.parameters.push(ph);
  }

  function emitReferences() {
    for (const [param, paramRef] of params) {
      root.parameters[param.name] = {
        ...paramRef,
      };

      for (const key of Object.keys(paramRef)) {
        delete paramRef[key];
      }

      paramRef['$ref'] = '#/parameters/' + param.name;
    }

    for (const [type, schema] of schemas) {
      const name = program.checker.getTypeName(type) || '(Anonymous Model)';

      root.definitions[name] = getSchemaForType(type);

      for (const key of Object.keys(schema)) {
        delete schema[key];
      }

      schema['$ref'] = '#/parameters/' + name;
    }
  }
  function getSchemaForType(type) {
    const builtinType = mapADLTypeToOpenAPI(type);
    if (builtinType) return builtinType;

    if (type.kind === 'Array') {
      return getSchemaForArray(type);
    } else if (type.kind === 'Model') {
      return getSchemaForModel(type);
    } else if (type.kind === 'Union') {
      return getSchemaForUnion(type);
    }

    throw new Error("Couldn't get schema for type " + type.kind);
  }

  function getSchemaForUnion(union) {
    return {
      oneOf: union.options.map((o) => getSchemaPlaceholder(o)),
    };
  }

  function getSchemaForArray(array) {
    const target = array.elementType;

    return {
      type: 'Array',
      items: getSchemaPlaceholder(target),
    };
  }

  function getSchemaForModel(model) {
    const modelSchema = {
      type: 'object',
      required: [],
      properties: {},
      description: getDescription(model),
    };

    for (const [name, prop] of model.properties) {
      const headerInfo = getHeaderFieldName(prop);
      const queryInfo = getQueryParamName(prop);
      const pathInfo = getPathParamName(prop);
      const statusInfo = isStatus(prop);
      const description = getDescription(prop);
      if (headerInfo || queryInfo || pathInfo || statusInfo) {
        continue;
      } else {
        if (!prop.optional) {
          modelSchema.required.push(name);
        }
        modelSchema.properties[name] = getSchemaPlaceholder(prop.type);
        if (description) {
          modelSchema.properties[name].description = description;
        }
      }
    }

    return modelSchema;
  }

  function mapADLTypeToOpenAPI(adlType) {
    switch (adlType.kind) {
      case 'Number':
      case 'String':
        return adlType.value;
      case 'Model':
        switch (adlType.name) {
          case 'int32':
            return { type: 'integer', format: 'int32' };
          case 'int64':
            return { type: 'number' };
          case 'float64':
            return { type: 'number' };
          case 'string':
            return { type: 'string' };
          case 'boolean':
            return { type: 'boolean' };
          case 'date':
            return { type: 'string' };
        }
      default:
        return false;
    }
  }
}

import { getDescription } from "../../lib/decorators.js";

let init = false;

const root = {
  openapi: "3.0.0",
  info: {},
  servers: [],
  paths: {},
  components: {
    schemas: {}
  }
}

export function openapi(program, entity) {
  if (!init) {
    program.onBuild(emitOpenAPI);
    init = true;
  }
}

function emitOpenAPI(program) {
  for (let resource of resources) {
    emitPathsFromResource(resource);
  }

  console.log(JSON.stringify(root, null, 4));
}

function emitPathsFromResource(resource) {
  const basePath = basePaths.get(resource);

  if (!root.paths[basePath]) {
    root.paths[basePath] = {}
  }

  const pathParams = basePath.match(/\{\w+\}/g)?.map(s => s.slice(1, -1)) ?? [];

  if (resource.properties.has('list')) {
    const prop = resource.properties.get('list');
    root.paths[basePath].get = endpointShapeFromSignature(prop, pathParams);
  }

  if (resource.properties.has('create')) {
    const prop = resource.properties.get('create');
    root.paths[basePath].post = endpointShapeFromSignature(prop, pathParams)
  }

  if (resource.properties.has('read')) {
    const prop = resource.properties.get('read');
    const id = prop.parameters[0];
    const subPath = `${basePath}/{${id.name}}`;
    if (!root.paths[subPath]) {
      root.paths[subPath] = {}
    }
    root.paths[subPath].get = endpointShapeFromSignature(prop, [...pathParams, id.name]);
  }

  if (resource.properties.has('update')) {
    const prop = resource.properties.get('update');
    const id = prop.parameters[0];
    const subPath = `${basePath}/{${id.name}}`;
    if (!root.paths[subPath]) {
      root.paths[subPath] = {}
    }
    root.paths[subPath].update = endpointShapeFromSignature(prop, [...pathParams, id.name]);
  }

  if (resource.properties.has('delete')) {
    const prop = resource.properties.get('delete');
    const id = prop.parameters[0];
    const subPath = `${basePath}/{${id.name}}`;
    if (!root.paths[subPath]) {
      root.paths[subPath] = {}
    }
    root.paths[subPath].delete = endpointShapeFromSignature(prop, [...pathParams, id.name]);
  }

  if (resource.properties.has('deleteAll')) {
    const prop = resource.properties.get('deleteAll');
    root.paths[basePath].delete = endpointShapeFromSignature(prop, pathParams);
  }

  // the first parameters is the resource id
}


function endpointShapeFromSignature(prop, pathParams = []) {
  return {
    summary: getDescription(prop),
    parameters: parametersShapeFromParameters(prop.parameters, pathParams),
    responses: responseShapesFromReturnType(prop.returnType)
  }
}

function parametersShapeFromParameters(params, pathParams) {
  const shapes = [];

  for (const p of params) {
    shapes.push({
      name: p.name,
      in: pathParams.includes(p.name) ? "path" : "query",
      required: !p.optional,
      schema: getSchemaForType(p.type)
    });
  }

  return shapes;
}

function responseShapesFromReturnType(returnType) {
  const responseShapes = {};

  if (returnType.kind !== "Tuple") {
    throw new Error("Return type must be a tuple")
  }

  if (returnType.values.length !== 2) {
    throw new Error("Return type must have both success and error types")
  }

  const successType = returnType.values[0];
  const errorType = returnType.values[1];

  if (successType.kind === "Union" && successType.options.every(o => responses.has(o))) {
    unpackUnionOfResponses(responseShapes, successType);
  } else {
    responseShapeFromType(responseShapes, successType, 200);
  }

  if (errorType.kind === "Union" && errorType.options.every(o => responses.has(o))) {
    unpackUnionOfResponses(responseShapes, errorType);
  } else {
    responseShapeFromType(responseShapes, errorType, "default");
  }


  return responseShapes;
}

function unpackUnionOfResponses(responseShapes, union) {
  for (const option of union.options) {
    const code = option.properties.get('statusCode')?.type.value ?? 200
    responseShapeFromType(responseShapes, union, code);
  }
}

function responseShapeFromType(responseShapes, type, defaultStatusCode) {
  if (type.kind === "Model" && type.properties.size === 0) {
    responseShapes[defaultStatusCode === 200 ? 201 : defaultStatusCode] = {
      "description": "Null response"
    }

    return;
  }

  if (responses.has(type)) {
    responseShapeFromResponse(responseShapes, type, defaultStatusCode);
    return;
  }

  responseShapes[defaultStatusCode] = {
    content: {
      "application/json": {
        schema: getSchemaForType(type)
      }
    }
  }
}

/**
 * Response schemas are models with the following (optional) properties:
 * * content - the content of the response
 * * statusCode
 * * headers
 * * contentType
 */
function responseShapeFromResponse(responses, responseType, defaultStatusCode) {
  const headers = [];
  const contentProp = responseType.properties.get('content');
  if (!contentProp) {
    throw new Error('need content in response');
  }

  const statusCode = responseType.properties.has('statusCode')
    ? responseType.properties.get('statusCode').type.value
    : defaultStatusCode

  responses[statusCode] = {
    content: {
      "application/json": {
        schema: getSchemaForType(contentProp.type)
      }
    }
  }
}


const knownModels = new Map();
function getSchemaForType(type) {
  if (knownModels.has(type)) {
    return knownModels.get(type)
  }

  const builtinType = mapADLTypeToOpenAPI(type);
  if (builtinType) return builtinType;

  if (type.kind === 'Array') {
    return getSchemaForArray(type);
  } else if (type.kind === 'Model') {
    return getSchemaForModel(type);
  } else if (type.kind === 'Union') {
    return getSchemaForUnion(type);
  }
}

function getSchemaForUnion(union) {
  return {
    oneOf: union.options.map(o => getSchemaForType(o))
  }
}

const knownModelArrays = new Map();
function getSchemaForArray(array) {
  const target = array.elementType;

  if (knownModelArrays.has(target)) {
    return knownModelArrays.get(target);
  }


  const schemaName = target.name + 'Array';
  root.components.schemas[schemaName] = {
    type: "Array",
    items: getSchemaForType(target)
  }

  const schema = {
    $ref: "#/components/schemas/" + schemaName
  }

  knownModelArrays.set(target, schema);

  return schema;
}

function getSchemaForModel(model) {
  const required = [...model.properties]
    .filter(([_, p]) => !p.optional)
    .map(([_, p]) => p.name)

  const modelSchema = {
    type: "object",
    required,
    properties: {}
  }

  for (const [name, prop] of model.properties.entries()) {
    modelSchema.properties[name] = getSchemaForType(prop.type);
  }

  if (!model.name) return modelSchema;

  const refSchema = {
    $ref: "#/components/schemas/" + model.name
  }

  root.components.schemas[model.name] = modelSchema

  // next time we ask for this model, we'll just return
  // the ref schema
  knownModels.set(model, refSchema);

  return refSchema;
}

function mapADLTypeToOpenAPI(adlType) {
  switch (adlType.kind) {
    case "NumberLiteral":
      return { type: "number" }
    case "StringLiteral":
      return { type: "string" }
    case "Model":
      switch (adlType.name) {
        case "int32":
          return { type: "integer", format: "int32" }
        case "int64":
          return { type: "number" }
        case "float64":
          return { type: "number" }
        case "string":
          return { type: "string" }
      }
    default:
      return false;
  }
}
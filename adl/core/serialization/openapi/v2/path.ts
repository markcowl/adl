import { items, length, values } from '@azure-tools/linq';
import { common, isReference, v2 } from '@azure-tools/openapi';
import { nameOf } from '@azure-tools/sourcemap';
import { Alias } from '../../../model/alias';
import { createOperationGroup, createOperationStructure, Method, OperationStructure, Path } from '../../../model/http/operation';
import { Response } from '../../../model/http/response';
import { ParameterTypeReference } from '../../../model/schema/type';
import { addExtensionsToAttic } from '../common';
import { getGroupAndName } from '../common/path';
import { versionInfo } from '../common/schema';
import { getParameterReference, processParameter } from './parameter';
import { response } from './response';
import { Context } from './serializer';

export async function processPaths(pathLists: Array<v2.Paths>, $: Context) {
  const map = new Map<string, Array<OperationStructure>>();
  for (const pathList of pathLists) {
    for (let [, path] of items(pathList)) {
      if (isReference(path)) {
        path = <v2.PathItem>((await $.resolveReference(path.$ref)).node);
      }
      for await (const operation of processPath(path, $)) {
        let operations = map.get(operation.group);
        if (!operations) {
          operations = new Array<OperationStructure>();
          map.set(operation.group, operations);
        }
        operations.push(operation);
      }
    }
  }

  for (const [group, structures] of items(map)) {
    createOperationGroup($.api, group, structures);
  }
}

async function* processPath(pathItem: v2.PathItem, $: Context): AsyncGenerator<OperationStructure> {
  const path = nameOf(pathItem);
  for (const method of values(common.HttpMethod)) {
    if (method in pathItem) {
      yield processOperation({method: <Method><unknown>method, path}, pathItem[<common.HttpMethod>method], pathItem, $);
    }
  }
  addExtensionsToAttic($.api.http, pathItem);
}

async function processOperation(path: Path, operation: v2.Operation, shared: v2.PathItem, $: Context): Promise<OperationStructure> {
  const [group, name] = getGroupAndName(operation, path.path);

  const parameters = new Array<ParameterTypeReference>();
  const responses = new Array<Response | Alias<Response>>();

  // OAI2 parameters are all in the operation
  for (const each of values(shared.parameters)) {
    parameters.push(await processParameter(each, $, { isAnonymous: true, operation: operation }));
  }
  for (const p of values(operation.parameters)) {
    parameters.push(await processParameter(p, $, { isAnonymous: true, operation: operation }));
  }

  const consumes = operation?.consumes || $.sourceModel.consumes || [];
  const hasBodyParameter = () => parameters.find(
    each => each.location == v2.ParameterLocation.Body ||
    each.location == v2.ParameterLocation.FormData) !== undefined;

  if (length(consumes) > 0 && !hasBodyParameter()) {
    // they specified a body content type, but no actual body parameter, which means
    // they get an anonymous one added 
    const bodyParameter: v2.BodyParameter = {
      name: 'body',
      in: v2.ParameterLocation.Body
    };
  
    parameters.push(getParameterReference(bodyParameter, $.api.schemas.primitives.file, $, { isAnonymous: true, operation }));
  }

  for await (const rsp of $.processDictionary(response, <any>operation.responses, {operation})) {
    responses.push(rsp);
  }

  return createOperationStructure(
    $.api,
    path,
    group,
    name, {
      summary: operation.summary,
      description: operation.description,
      tags: operation.tags,
      parameters,
      responses,
      ...versionInfo($, operation)
    });

  // TODO: Things below are not batched because they are not emitted to TS yet
  // pick up external docs
  // for await (const reference of processExternalDocs(operation.externalDocs, $)) {
  //   result.references.push(reference);
  // }

  // // since we're not going thru $.process
  // $.addVersionInfo(result, operation);

  // // push to the attic for now
  // result.addToAttic('security', operation.security);

  // result.addToAttic('x-ms-examples', operation['x-ms-examples']);
  // result.addToAttic('x-ms-pageable', operation['x-ms-pageable']);
  // result.addToAttic('x-ms-long-running-operation-options', operation['x-ms-long-running-operation-options']);
  // result.addToAttic('x-ms-long-running-operation', operation['x-ms-long-running-operation']);

  // yield addExtensionsToAttic(result, operation);
}


import { values } from '@azure-tools/linq';
import { common, isReference, v2 } from '@azure-tools/openapi';
import { JsonReference, ParameterLocation } from '@azure-tools/openapi/dist/v2';
import { nameOf } from '@azure-tools/sourcemap';
import { Operation } from '../../../model/http/operation';
import { addExtensionsToAttic, push } from '../common';
import { processExternalDocs } from '../common/info';
import { requestBody } from './body-parameter';
import { parameter } from './parameter';
import { response } from './response';
import { Context } from './serializer';

export async function* path(pathItem: v2.PathItem, $: Context, options?: { isAnonymous?: boolean }): AsyncGenerator<Operation> {
  const path = nameOf(pathItem);
  for (const method of values(common.HttpMethod)) {
    if (method in pathItem) {
      yield* operation(path, pathItem[<common.HttpMethod>method], pathItem, $);
    }
  }
  addExtensionsToAttic($.api.http, pathItem);
}

export async function* operation(path: string, operation: v2.Operation, shared: v2.PathItem, $: Context): AsyncGenerator<Operation> {
  const result = new Operation({
    description: operation.description ,
    summary: operation.summary,
    id: operation.operationId,
    tags: [...operation.tags || []]
  });

  // push to the attic for now
  result.addToAttic('security', operation.security);

  // since we're not going thru $.process
  $.addVersionInfo(result, operation);

  // OAI2 parameters are all in the operation
  for (const p of values(shared.parameters)) {
    if (isReference(p)) {
      const r = await $.resolveReference(p.$ref);
      if (r.in === ParameterLocation.Body) {
        push(result.requests, $.processInline(requestBody, <JsonReference<v2.BodyParameter>> p, { isAnonymous: true, operation }));
        continue;
      }
    } else if(p.in === ParameterLocation.Body )  {
      push(result.requests, $.processInline(requestBody, <v2.BodyParameter>p, { isAnonymous: true, operation}));
      continue;
    }

    // create each parameter in the operation  (non-body)
    await push(result.parameters, $.processInline(parameter, p));
  }

  for (const p of values(operation.parameters)) {
    // create each parameter in the operation 
    await push(result.parameters, $.processInline(parameter, p));
  }

  for await (const rsp of $.processDictionary(response, <any>operation.responses, {operation})) {
    result.responses.push(rsp);
  }
  // pick up external docs
  for await (const reference of processExternalDocs(operation.externalDocs, $)) {
    result.references.push(reference);
  }

  yield addExtensionsToAttic(result, operation);
}
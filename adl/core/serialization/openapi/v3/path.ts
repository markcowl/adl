import { values } from '@azure-tools/linq';
import { common, v3, vendorExtensions } from '@azure-tools/openapi';
import { nameOf } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { Operation } from '../../../model/http/operation';
import { addExtensionsToAttic } from '../common';
import { processExternalDocs } from './info';
import { parameter } from './parameter';
import { requestBody } from './request-body';
import { response } from './response';
import { Context, ItemsOf } from './serializer';

export async function *processPaths(input: ItemsOf<v3.PathItem>, $: Context): AsyncGenerator<Element> {
  // handle extensions first
  for (const { key, value } of vendorExtensions(input)) {
    // switch block to handle specific vendor extension?
    // unknown ones need to get attached to something.

    switch (key) {

      case 'x-whatever':
        // do something with the extension
        // make sure it gets deleted
        // delete value[key];
        break;
    }
  }
  yield* $.processDictionary(path, input);
  
}


export async function *path(pathItem: v3.PathItem, $: Context, options?: { isAnonymous?: boolean }): AsyncGenerator<Operation> {
  const path = nameOf(pathItem);
  for( const method of values(common.HttpMethod) ){
    if( method in pathItem) {
      yield * operation(path, pathItem[<common.HttpMethod>method], pathItem, $);
    } 
  }
  addExtensionsToAttic($.api.http,pathItem);
}

export async function *operation(path: string, operation: v3.Operation, shared: v3.PathItemBase, $: Context): AsyncGenerator<Operation > {
  const result = new Operation({
    description: operation.description || shared.description ,
    summary: operation.summary || shared.summary,
    id: operation.operationId,
    tags: [...operation.tags || []]
  });

  // OAI3 parameters are all in the operation
  for( const p of values(shared.parameters).concat(values(operation.parameters)) ) {
    // create each parameter in the operation 
    if( p) {
      for await (const each of $.processInline(parameter, p)) {
        result.parameters.push(each);
      }
    }
  }

  // request body
  for await ( const request of $.processInline(requestBody, operation.requestBody, {isAnonymous: true}) ) {
    // each request body.
    result.requests.push( request);
  }
  
  for await ( const rsp of $.processDictionary(response, <any> operation.responses)) {
    result.responses.push(rsp);
  }
  // pick up external docs
  for await (const reference of processExternalDocs(operation.externalDocs, $) ) {
    result.references.push( reference);
  }
  
  yield addExtensionsToAttic(result, operation);
}
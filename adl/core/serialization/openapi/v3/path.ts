import { values } from '@azure-tools/linq';
import { common, unzip, v3 } from '@azure-tools/openapi';
import { nameOf } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { Operation } from '../../../model/http/operation';
import { addExtensionsToAttic } from '../common';
import { processExternalDocs } from './info';
import { processParameter } from './parameter';
import { Context, ItemsOf } from './serializer';

export async function processPaths(input: ItemsOf<v3.PathItem>, $: Context): Promise<Element | undefined> {
  const { extensions, references, values: paths } = unzip<v3.PathItem>(input);

  // handle extensions first
  for (const { key, value } of values(extensions)) {
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

  // handle actual items next
  for (const { key, value } of values(paths)) {
    await $.process(path, value);
  }

  // handle references last 
  for (const { key, value } of values(references)) {
    await $.processInline(path, value);
  }

  return undefined;
}


export async function path(pathItem: v3.PathItem, $: Context, options?: { isAnonymous?: boolean }): Promise<undefined> {
  const path = nameOf(pathItem);
 
  for( const method in pathItem) {
    if( method in common.HttpMethod) {
      await operation(path, pathItem[<common.HttpMethod>method], pathItem, $);
    } 
  }
  addExtensionsToAttic($.api.http,pathItem);
  return undefined;
}

export async function operation(path: string, operation: v3.Operation, shared: v3.PathItemBase, $: Context): Promise < Operation | undefined > {
  const result = new Operation({
    description: operation.description || shared.description ,
    summary: operation.summary || shared.summary,
    id: operation.operationId,
    tags: operation?.tags
  });

  // parameters 
  for( const parameter of values(shared.parameters).concat(values(operation.parameters)) ) {
    // create each parameter in the operation 
    if( parameter) {
      result.parameters.push( await $.processInline( processParameter, parameter ) );
    }
  }

  // pick up external docs
  result.references.push(await processExternalDocs(operation.externalDocs,$));
  return undefined; 
}
import { Element } from '../../../model/element';
import { ItemsOf, Context } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processRequestBodies(requestBodies: ItemsOf<v3.RequestBody>, $: Context): Promise<Element | undefined> {
  return undefined;
}

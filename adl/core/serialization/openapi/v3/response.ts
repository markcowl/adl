import { Element } from '../../model/element';
import { ItemsOf, Context } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processResponses(responses: ItemsOf<v3.Response>, $: Context): Promise<Element | undefined> {
  return undefined;
}

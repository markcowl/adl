import { Element } from '../../model/element';
import { ItemsOf, Context } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processCallbacks(callbacks: ItemsOf<v3.Callback>, $: Context): Promise<Element | undefined> {
  return undefined;
}

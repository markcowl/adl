import { v3 } from '@azure-tools/openapi';
import { Element } from '../../../model/element';
import { Context, ItemsOf } from './serializer';

export async function processCallbacks(callbacks: ItemsOf<v3.Callback>, $: Context): Promise<Element | undefined> {
  return undefined;
}

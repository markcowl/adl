import { v3 } from '@azure-tools/openapi';
import { Element } from '../../../model/element';
import { Context, ItemsOf } from './serializer';

export async function processLinks(links: ItemsOf<v3.Link>, $: Context): Promise<Element | undefined> {
  return undefined;
}

import { Element } from '../../model/element';
import { ItemsOf, Context } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processLinks(links: ItemsOf<v3.Link>, $: Context): Promise<Element | undefined> {
  return undefined;
}

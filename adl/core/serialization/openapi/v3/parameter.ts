import { Element } from '../../../model/element';
import { ItemsOf, Context } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processParameters(parameters: ItemsOf<v3.Parameter>, $: Context): Promise<Element | undefined> {
  return undefined;
}

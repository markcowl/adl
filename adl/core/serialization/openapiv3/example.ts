import { Element } from '../../model/element';
import { Context, ItemsOf } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processExamples(examples: ItemsOf<v3.Example>, $: Context): Promise<Element | undefined> {
  return undefined;
}

import { v3 } from '@azure-tools/openapi';
import { Element } from '../../../model/element';
import { Context, ItemsOf } from './serializer';

export async function processExamples(examples: ItemsOf<v3.Example>, $: Context): Promise<Element | undefined> {
  return undefined;
}

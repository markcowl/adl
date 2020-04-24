import { Element } from '../../model/element';
import { DictionaryContext } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processParameters($: DictionaryContext<v3.Parameter>): Promise<Element | undefined> {
  return undefined;
}

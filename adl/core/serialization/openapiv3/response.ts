import { Element } from '../../model/element';
import { DictionaryContext } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processResponses($: DictionaryContext<v3.Response>): Promise<Element | undefined> {
  return undefined;
}

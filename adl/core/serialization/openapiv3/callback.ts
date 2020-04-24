import { Element } from '../../model/element';
import { DictionaryContext } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processCallbacks($: DictionaryContext<v3.Callback>): Promise<Element | undefined> {
  return undefined;
}

import { Element } from '../../model/element';
import { DictionaryContext } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processLinks($: DictionaryContext<v3.Link>): Promise<Element | undefined> {
  return undefined;
}

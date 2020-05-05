import { Element } from '../../model/element';
import { ItemsOf, Context } from './serializer';
import { v3 } from '@azure-tools/openapi';

export async function processSecuritySchemes(securitySchemes: ItemsOf<v3.SecurityScheme>, $: Context): Promise<Element | undefined> {
  return undefined;
}

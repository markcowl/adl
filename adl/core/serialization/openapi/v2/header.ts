import { v2 } from '@azure-tools/openapi';
import { ts } from 'ts-morph';
import { HeaderTypeReference } from '../../../model/schema/type';
import { TypeSyntax } from '../../../support/codegen';
import { processSchema } from './schema';
import { Context } from './serializer';

// NOTE: headers cannot be referenced in v2. They are always inline/anonymous
export async function processHeader(header: v2.Header, $: Context, options: {isAnonymous: true; wireName: string}): Promise<HeaderTypeReference> {
  // get the schema for the header 
  const schema = await processSchema(<v2.Schema>header, $, { isAnonymous: true });
  const headerType = ts.createTypeReferenceNode(
    'Header', [
      schema.declaration.node,
      ts.createLiteralTypeNode(ts.createStringLiteral(options.wireName))
    ]);

  const headerRef: HeaderTypeReference = {
    declaration: new TypeSyntax(headerType),
    requiredReferences: schema.requiredReferences,
  };

  return headerRef;
}


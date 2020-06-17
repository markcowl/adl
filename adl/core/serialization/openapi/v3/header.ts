import { isReference, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { ts } from 'ts-morph';
import { createTypeAlias } from '../../../model/schema/alias';
import { HeaderTypeReference } from '../../../model/schema/type';
import { TypeSyntax } from '../../../support/codegen';
import { processSchema } from '../v3/schema';
import { Context } from './serializer';

export async function processHeader(header: v3.Header | v3.HeaderReference, $: Context, clientName: string, options?: { isAnonymous: boolean }): Promise<HeaderTypeReference> {
  // Header names appear where headers are consumed, not in their definition. However,
  // we want the ADL definition to hold the header name, so we append the name from the
  // reference to the map. If the same header object is ref'ed with two different names,
  // that should create two different ADL headers.
  const here = $.normalizeReference(`${refTo(header)}:${clientName}`).$ref;

  const headerRef = $.visitor.references.header.get(here);
  if (headerRef) {
    return headerRef;
  }

  const impl = async () => {
    if (isReference(header)) {
      let headerRef = $.visitor.references.header.get($.normalizeReference(`${header.$ref}:${clientName}`).$ref);

      // have we already got a reference for the target?
      if (!headerRef) {
        // nope, not handled yet.
        const resolvedReference = await $.resolveReference(header.$ref);
        headerRef = await processHeader(resolvedReference.node, resolvedReference.context, clientName);
      }

      return headerRef;
    }

    // these are in the OAI schema, but should not be in headers - freakout if they are used
    header.explode && $.error('header definitions must not contain property \'explode\'', header.explode);
    header.required && $.warn('header definitions should not contain property \'required\'', header.required);
    
    // style can only be simple
    header.style != undefined && header.style != 'simple' && $.error('header style must be \'simple\'', header);

    // get the schema for the header 
    const schema = await processSchema(header.schema, $, { isAnonymous: true });
    const headerType = ts.createTypeReferenceNode(
      'Header', [
        schema.declaration.node,
        ts.createLiteralTypeNode(ts.createStringLiteral(clientName))
      ]);

    let headerRef: HeaderTypeReference = {
      declaration: new TypeSyntax(headerType),
      requiredReferences: schema.requiredReferences,
    };

    const name = options?.isAnonymous ? anonymous('header') : nameOf(header);
    if (!options?.isAnonymous) {
      headerRef = createTypeAlias($.api, name, headerRef, { summary: header.description });
    }

    return headerRef;
  };


  const result = await impl();
  $.visitor.references.header.set(here, result);
  return result;
}
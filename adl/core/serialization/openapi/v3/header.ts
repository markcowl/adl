import { isReference, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { StructureKind, ts, TypeParameterDeclarationStructure } from 'ts-morph';
import { createTypeAlias } from '../../../model/schema/alias';
import { HeaderTypeReference, SchemaTypeReference } from '../../../model/schema/type';
import { TypeSyntax } from '../../../support/codegen';
import { processSchema } from '../v3/schema';
import { Context } from './serializer';

export async function processHeader(header: v3.Header | v3.HeaderReference, $: Context, options?: { isAnonymous?: boolean; wireName?: string }): Promise<HeaderTypeReference> {
  const here = $.normalizeReference(refTo(header)).$ref;

  const headerRef = $.visitor.references.header.get(here);
  if (headerRef) {
    return headerRef;
  }

  const impl = async () => {
    if (isReference(header)) {
      let headerRef = $.visitor.references.header.get($.normalizeReference(header.$ref).$ref);
      if (!headerRef) {
        const resolvedReference = await $.resolveReference(header.$ref);
        headerRef = await processHeader(resolvedReference.node, resolvedReference.context);
      }

      return specializeWithName(headerRef, options!.wireName!);
    }

    // these are in the OAI schema, but should not be in headers - freakout if they are used
    header.explode && $.error('header definitions must not contain property \'explode\'', header.explode);
    header.required && $.warn('header definitions should not contain property \'required\'', header.required);

    // style can only be simple
    header.style != undefined && header.style != 'simple' && $.error('header style must be \'simple\'', header);

    // get the schema for the header
    const schema = await processSchema(header.schema, $, { isAnonymous: true });

    const headerRef = getHeaderReference(schema, options?.wireName);
    const name = options?.isAnonymous ? anonymous('header') : nameOf(header);
    return createTypeAlias($.api, name, headerRef, { summary: header.description });
  };


  const result = await impl();
  $.visitor.references.header.set(here, result);
  return result;
}

function getHeaderReference(schema: SchemaTypeReference, wireName?: string): HeaderTypeReference {
  let typeParameters: Array<TypeParameterDeclarationStructure> | undefined;
  const typeArguments = [schema.declaration.node];

  if (wireName) {
    typeParameters = undefined;
    typeArguments.push(ts.createLiteralTypeNode(ts.createStringLiteral(wireName)));
  } else {
    typeParameters = [{ kind: StructureKind.TypeParameter, name: 'WireName' }];
    typeArguments.push(ts.createTypeReferenceNode('WireName', undefined));
  }

  return {
    declaration: new TypeSyntax(ts.createTypeReferenceNode('Header', typeArguments)),
    requiredReferences: schema.requiredReferences,
    typeParameters
  };
}

function specializeWithName(headerRef: HeaderTypeReference, clientName: string) {
  const type = <ts.TypeReferenceNode>headerRef.declaration.node;
  const specializedType = ts.createTypeReferenceNode(
    type.typeName,
    [ts.createLiteralTypeNode(ts.createStringLiteral(clientName))]);

  return {
    ...headerRef,
    typeParameters: undefined,
    declaration: new TypeSyntax(specializedType)
  };
}
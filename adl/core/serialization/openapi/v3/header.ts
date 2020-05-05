import { v3, isVendorExtension, JsonReference, VendorExtensions, ExternalDocumentation, vendorExtensions, unzip, Tag } from '@azure-tools/openapi';
import { Header } from '../../model/http/header';

import { isReference } from '@azure-tools/openapi';
import { Context, ItemsOf } from './serializer';
import { values, items, length } from '@azure-tools/linq';

import { Element } from '../../model/element';
import { processSchemaReference, processSchema } from './schema';
import { anonymous, use, using, nameOf, refTo } from '@azure-tools/sourcemap';

const { hasSchema } = v3;


export async function processHeaders(input: ItemsOf<v3.Header>, $: Context): Promise<Element | undefined> {
  const { extensions, references, values: headers } = unzip<v3.Header>(input);

  // handle extensions first
  for (const { key, value: extension } of values(extensions)) {
    // switch block to handle specific vendor extension?
    // unknown ones need to get attached to something.

    switch (key) {

      case 'x-whatever':
        // do something with the extension
        // make sure it gets deleted
        // delete value[key];
        break;
    }
  }

  // handle actual items next
  for (const { key, value: header } of values(headers)) {
    await $.process(processHeader, header);
  }

  // handle references last 
  for (const { key, value: reference } of values(references)) {
    await $.process(processHeaderReference, reference);
  }

  return undefined;
}

async function processHeaderReference(headerReference: v3.HeaderReference, $: Context, options?: { isAnonymous?: boolean }): Promise<Header | undefined> {
  return undefined;
}

export async function processHeader(header: v3.Header, $: Context, options?: { isAnonymous?: boolean }): Promise<Header | undefined> {
  const { api, visitor } = $;
  const key = options?.isAnonymous ? 'anonymous-header' : nameOf(header);


  // these are in the OAI schema, but should not be in headers - freakout if they are used
  use(header.explode) && $.error('header definitions must not contain property \'explode\'', header.explode);
  use(header.required) && $.warn('header definitions should not contain property \'required\'', header.required);

  // get the schema for the header 
  const schema = hasSchema(header) ?
    isReference(header.schema) ?
      // they have used a $ref to a schema - resolve that.
      // await process(processReference, header.schema)
      await $.process(processSchemaReference, header.schema, { isAnonymous: true }) :
      // an inlined schema --process that first
      await $.process(processSchema, header.schema, { isAnonymous: true }) :
    // nope, no schema.
    undefined;

  // create the http header object and track it. 
  const httpHeader = new Header({
    // maintain the key
    $key: key.toString(),
    // use the schema
    schema,
    // set a specific value 
    description: header.description,
    // set the style value
    style: use(header.style),
  });

  // best practice - put this into the $refs collection early 
  if (!options?.isAnonymous) {
    visitor.$refs.set(refTo(header), httpHeader);
  }

  // preserve data that we're not using
  httpHeader.addToAttic('example', use(header.example));

  // add it to the model and return the header to the caller.
  api.http.headers.push(httpHeader);
  return httpHeader;
}

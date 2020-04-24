import { v3, isVendorExtension, JsonReference, VendorExtensions, ExternalDocumentation, vendorExtensions, unzip, Tag } from '@azure-tools/openapi';
import { HttpHeader } from '../../model/http/header';

import { isReference } from '@azure-tools/openapi';
import { Context, DictionaryContext } from './serializer';
import { values, items, length } from '@azure-tools/linq';

import { Element } from '../../model/element';
import { processSchemaReference, processSchema } from './schema';
import { anonymous } from '@azure-tools/sourcemap';

const { hasSchema } = v3;


export async function processHeaders($: DictionaryContext<v3.Header>): Promise<Element | undefined> {
  const { value } = $;
  const { extensions, references, values: headers } = unzip<v3.Header>(value);

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
    await $.process(processHeader, key);
  }

  // handle references last 
  for (const { key, value: reference } of values(references)) {
    await $.process(processHeaderReference, key, reference);
  }

  return undefined;
}

async function processHeaderReference($: Context<v3.HeaderReference>): Promise<HttpHeader | undefined> {

  return undefined;
}


export async function processHeader($: Context<v3.Header>): Promise<HttpHeader | undefined> {
  const { key, value: header, api, visitor, isAnonymous, refToHere } = $;

  // these are in the OAI schema, but should not be in headers - freakout if they are used
  $.use('explode') && $.error('header definitions must not contain property \'explode\'');
  $.use('required') && $.warn('header definitions should not contain property \'required\'');

  // get the schema for the header 
  const schema = hasSchema(header) ?
    isReference(header.schema) ?
      // they have used a $ref to a schema - resolve that.
      // await process(processReference, header.schema)
      await $.process(processSchemaReference, anonymous('schema'), header.schema) :
      // an inlined schema --process that first
      await $.process(processSchema, anonymous('schema'), header.schema) :
    // nope, no schema.
    undefined;

  // create the http header object and track it. 
  const httpHeader = $.track(new HttpHeader({
    // maintain the key
    $key: key.toString(),
    // use the schema
    schema,
    // set a specific value 
    description: $.use('description', `-- test -- ${header.description}`),
    // set the style value
    style: $.use('style'),
  }));

  // best practice - put this into the $refs collection early 
  if (!isAnonymous) {
    visitor.$refs.set(refToHere, httpHeader);
  }

  // preserve data that we're not using
  httpHeader.addToAttic('example', $.use('example'));

  // add it to the model and return the header to the caller.
  api.http.headers.push(httpHeader);
  return httpHeader;
}

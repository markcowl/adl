import { values } from '@azure-tools/linq';
import { unzip, v3 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo, use } from '@azure-tools/sourcemap';
import { Element } from '../../../model/element';
import { Header } from '../../../model/http/header';
import { processInline } from './schema';
import { Context, ItemsOf } from './serializer';

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
  for (const { key, value } of values(headers)) {
    await $.process(header, value);
  }

  // handle references last 
  for (const { key, value } of values(references)) {
    await $.processInline(header, value, {});
  }

  return undefined;
}

export async function header(header: v3.Header, $: Context, options?: { isAnonymous?: boolean }): Promise<Header | undefined> {
  const { api, visitor } = $;
  const name = options?.isAnonymous ? anonymous('header') : nameOf(header);

  // these are in the OAI schema, but should not be in headers - freakout if they are used
  use(header.explode) && $.error('header definitions must not contain property \'explode\'', header.explode);
  use(header.required) && $.warn('header definitions should not contain property \'required\'', header.required);

  // get the schema for the header 
  const schema = await processInline(header.schema,$,{isAnonymous: true}); 

  // create the http header object and track it. 
  const httpHeader = new Header({
    // maintain the key
    name: name.toString(),
    // use the schema
    schema,
    // set a specific value 
    description: header.description,
    // set the style value
    style: use(header.style),
  });

  // best practice - put this into the $refs collection early 
  if (!options?.isAnonymous) {
    visitor.$refs.set(refTo(header), [httpHeader]);
  }

  // preserve data that we're not using
  httpHeader.addToAttic('example', use(header.example));

  // add it to the model and return the header to the caller.
  api.http.headers.push(httpHeader);
  return httpHeader;
}

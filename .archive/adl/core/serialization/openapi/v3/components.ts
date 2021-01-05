import { items } from '@azure-tools/linq';
import { v3 } from '@azure-tools/openapi';
import { Element } from '../../../model/element';
import { HttpProtocol } from '../../../model/http/protocol';
import { processHeader } from './header';
import { processParameter } from './parameter';
import { processRequestBody } from './request-body';
import { processResponse } from './response';
import { processSchema } from './schema';
import { authentication } from './security';
import { Context } from './serializer';
const { vendorExtensions } = v3;


// eslint-disable-next-line require-yield
export async function processComponents(components: v3.Components | undefined, $: Context) {
  if (!components) {
    return;
  }

  for (const [key, extension] of vendorExtensions(components)) {
    // switch(key)

  }

  for (const [key, value] of items(components.schemas)) {
    // process each item in the collection
    await processSchema(value, $);
  }

  // if there are vendor extensions in the dictionary, they should be handled like this:
  // for (const { key, value: extension } of vendorExtensions(components.headers)) {
  // ... do something ...
  // }

  for (const [key, value] of items(components.headers)) {
    await processHeader(value, $);
  }

  for (const [key, value] of items(components.parameters)) {
    // process each item in the collection
    await processParameter(value, $);
  }

  for await (const [key, value] of items(components.requestBodies)) {
    await processRequestBody(value, $);
  }

  for await (const [key, value] of items(components.responses)) {
    await processResponse(value, $);
  }

  for await (const auth of $.processDictionary(authentication, components.securitySchemes)) {
    (<HttpProtocol>$.api.protocols.http).authentications.push(auth);
  }


  // await $.process(processExamples, components.examples); // send to attic
  // await $.process(processCallbacks, components.callbacks);  // ok skip
  // await $.process(processLinks, components.links); // ok skip
}
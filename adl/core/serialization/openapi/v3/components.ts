import { v3 } from '@azure-tools/openapi';
import { Element } from '../../../model/element';
import { processHeaders } from './header';
import { processParameters } from './parameter';
import { processRequestBodies } from './request-body';
import { processResponses } from './response';
import { processSchemas } from './schema';
import { processSecuritySchemes } from './security-schemes';
import { Context } from './serializer';

const { vendorExtensions } = v3;

export async function processComponents(components: v3.Components, $: Context): Promise<Element | undefined> {

  for (const { key, value: extension } of vendorExtensions(components)) {
    // switch(key)

  }

  // definitely, schemas first, since so much will $ref them
  await $.process(processSchemas, components.schemas);
  await $.process(processHeaders, components.headers);

  await $.process(processParameters, components.parameters);
  await $.process(processRequestBodies, components.requestBodies);
  await $.process(processResponses, components.responses);

  await $.process(processSecuritySchemes, components.securitySchemes);

  // await $.process(processExamples, components.examples); // send to attic 
  
  // await $.process(processCallbacks, components.callbacks);  // ok skip
  // await $.process(processLinks, components.links); // ok skip


  return undefined;
}
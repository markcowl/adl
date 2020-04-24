import { v3 } from '@azure-tools/openapi';
import { Context } from './serializer';
import { Element } from '../../model/element';

import { processSchemas } from './schema';
import { processCallbacks } from './callback';
import { processExamples } from './example';
import { processLinks } from './link';
import { processParameters } from './parameter';
import { processRequestBodies } from './request-body';
import { processResponses } from './response';
import { processSecuritySchemes } from './security-schemes';
import { processHeaders } from './header';
const { vendorExtensions } = v3;

export async function processComponents($: Context<v3.Components>): Promise<Element | undefined> {
  const { value: components } = $;

  for (const { key, value: extension } of vendorExtensions(components)) {
    // switch(key)

  }

  // definitely, schemas first, since so much will $ref them
  await $.process(processSchemas, 'schemas', components.schemas);
  await $.process(processHeaders, 'headers', components.headers);
  await $.process(processCallbacks, 'callbacks', components.callbacks);
  await $.process(processExamples, 'examples', components.examples);
  await $.process(processLinks, 'links', components.links);
  await $.process(processParameters, 'parameters', components.parameters);
  await $.process(processRequestBodies, 'requestBodies', components.requestBodies);
  await $.process(processResponses, 'responses', components.responses);
  await $.process(processSecuritySchemes, 'securitySchemes', components.securitySchemes);

  return undefined;
}
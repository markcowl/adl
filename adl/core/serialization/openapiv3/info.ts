import { v3, vendorExtensions } from '@azure-tools/openapi';
import { Metadata, Contact, ContactRole, License } from '../../model/Metadata';
import { Context } from './serializer';
import { Element } from '../../model/element';
import { is } from '../../support/visitor';
import { use } from '@azure-tools/sourcemap';

async function addExtensionsToAttic(element: Element, input: any) {
  for (const { key, value } of vendorExtensions(input)) {
    element.addToAttic(key, use(value, true));
  }
  return element;
}

async function processContact(contact: v3.Contact, $: Context) {
  const result = new Contact(ContactRole.Author, {
    name: contact.name,
    email: contact.email,
    url: contact.url,
  });

  // add remaining extensions to attic. 
  await addExtensionsToAttic(result, contact);

  return result;
}

async function processLicense(license: v3.License, $: Context) {
  const result = new License(license.name, {
    url: license.url
  });
  // add remaining extensions to attic. 
  await addExtensionsToAttic(result, license);

  return result;
}

export async function processInfo(info: v3.Info, $: Context): Promise<Metadata | undefined> {

  // create the metadata 
  const metadata = new Metadata(info.title, {
    description: info.description,
    termsOfService: info.termsOfService
  });

  // add the author contact
  if (is(info.contact)) {
    metadata.contacts.push(await $.process(processContact, info.contact));
  }

  // add license
  if (is(info.license)) {
    metadata.licenses.push(await $.process(processLicense, info.license));
  }

  // add remaining extensions to attic. 
  await addExtensionsToAttic(metadata, info);

  $.api.metaData = metadata;

  // we handled version much earler.
  use(info.version);

  return metadata;
}


export async function processExternalDocs(externalDocs: v3.ExternalDocumentation, $: Context): Promise<Element | undefined> {
  return undefined;
}


export async function processTags(tags: Array<v3.Tag>, $: Context): Promise<Element | undefined> {
  return undefined;
}
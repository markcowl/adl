import { v3, vendorExtensions } from '@azure-tools/openapi';
import { Metadata, Contact, ContactRole, License } from '../../model/Metadata';
import { Context } from './serializer';
import { Element } from '../../model/element';
import { isObjectClean, is } from '../../support/visitor';
import { processLinks } from './link';

async function addExtensionsToAttic(element: Element, $: Context<any>, ) {
  for (const { key } of vendorExtensions($.value)) {
    element.addToAttic(key, $.use(key));
  }
  return element;
}

async function processContact($: Context<v3.Contact>) {
  const contact = $.track(new Contact(ContactRole.Author, {
    name: $.use('name'),
    email: $.use('email'),
    url: $.use('url'),
  }));

  // add remaining extensions to attic. 
  addExtensionsToAttic(contact, $);

  return contact;
}

async function processLicense($: Context<v3.License>) {
  const license = $.track(new License($.use('name'), {
    url: $.use('url')
  }));
  // add remaining extensions to attic. 
  addExtensionsToAttic(license, $);

  return license;
}

export async function processInfo($: Context<v3.Info>): Promise<Metadata | undefined> {

  // create the metadata 
  const metadata = $.track(new Metadata($.use('title'), {
    description: $.use('description'),
    termsOfService: $.use('termsOfService')
  }));

  // add the author contact
  if (is($.value.contact)) {
    metadata.contacts.push(await $.process(processContact, 'contact'));
  }

  // add license
  if (is($.value.license)) {
    metadata.licenses.push(await $.process(processLicense, 'license'));
  }

  $.api.metaData = metadata;
  if (metadata.$onAdd) {
    metadata.$onAdd(['metadata']);
  }
  return metadata;
}


export async function processExternalDocs($: Context<v3.ExternalDocumentation>): Promise<Element | undefined> {
  return undefined;
}


export async function processTags($: Context<Array<v3.Tag>>): Promise<Element | undefined> {
  return undefined;
}
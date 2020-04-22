export * from './contact';
export * from './dictionary';
export * from './external-docs';
export * from './info';
export * from './json-reference';
export * from './jsontype';
export * from './license';
export * from './tag';
export * from './uri';
export * from './vendor-extensions';
export * from './xml';

import { JsonReference } from './json-reference';
import { Dictionary } from './dictionary';
import { items, } from '@azure-tools/linq';
import { VendorExtensions } from './vendor-extensions';

/** asserts that the element passed in is a JsonRefernce */
export function isReference<T>(element: JsonReference<T> | T): element is JsonReference<T> {
  return element && '$ref' in element;
}

export function isVendorExtension(key: string | number | symbol): boolean {
  return key.toString().startsWith('x-');
}

export function unzip<T>(value: Dictionary<T | JsonReference<T>>) {
  const [extensions, remaining] = items(value).bifurcate(each => isVendorExtension(each.key));
  const [refs, values] = items(remaining).bifurcate(each => isReference(each.value));

  return {
    extensions: <Array<{ key: string; value: any }>>extensions,
    references: <Array<{ key: string; value: JsonReference<T> }>><unknown>refs,
    values: <Array<{ key: string; value: T }>><unknown>values,
  };
}

export function vendorExtensions(instance: VendorExtensions) {
  return items(<Dictionary<any>>instance).where(each => isVendorExtension(each.value));
}
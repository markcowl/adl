export * from './contact';
export * from './dictionary';
export * from './external-docs';
export * from './format';
export * from './http-method';
export * from './info';
export * from './json-reference';
export * from './jsontype';
export * from './license';
export * from './schema-extensions';
export * from './tag';
export * from './uri';
export * from './vendor-extensions';
export * from './xml';

import { items, values } from '@azure-tools/linq';
import { Dictionary } from './dictionary';
import { JsonReference } from './json-reference';
import { VendorExtensions } from './vendor-extensions';

/** asserts that the element passed in is a JsonRefernce */
export function isReference<T>(element: JsonReference<T> | T): element is JsonReference<T> {
  return element && '$ref' in element;
}

export function isVendorExtension(key: string | number | symbol): boolean {
  if (typeof key === 'symbol') {
    return false;
  }
  
  // treat x-* as 'vendor extensions' but x-ms-* should be in the openapi models
  return key.toString().startsWith('x-') && !key.toString().startsWith('x-ms');
}

export function unzip<T>(value: Dictionary<T | JsonReference<T>>) {
  const [extensions, remaining] = items(value).bifurcate(each => isVendorExtension(each.key));
  const [refs, vals] = values(remaining).bifurcate(each => isReference(each.value));

  return {
    extensions: <Array<{ key: string; value: any }>>extensions,
    references: <Array<{ key: string; value: JsonReference<T> }>><unknown>refs,
    values: <Array<{ key: string; value: T }>><unknown>vals,
  };
}

export function vendorExtensions(instance: VendorExtensions|any) {
  return items(<Dictionary<any>>instance).where(each => isVendorExtension(each.key));
}
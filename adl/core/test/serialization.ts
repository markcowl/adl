import { describe, it } from 'mocha';
import * as assert from 'assert';
import { readFile, writeFile, readdir, mkdir } from '@azure-tools/async-io';
import { FileSystem, UrlFileSystem } from '../support/file-system';
import { deserializeOpenAPI3 } from '../serialization/openapiv3/serializer';
import { stringify, Document, CST, AST } from 'yaml';
import { Schema, YAMLMap, Scalar, YAMLSeq } from 'yaml/types';
import { parseMap, parseSeq } from 'yaml/util';
import { Element } from '../model/element';
import { items, values, keys } from '@azure-tools/linq';
import { VersionInfo } from '../model/version-info';

const propertyPriority = [
  '$key',
  'name',
  'type',

  'primitives',
];

const propertyNegativePriority = [
  'versionInfo',
  'aliases',
  'attic'
];

function sortWithPriorty(a: any, b: any): number {
  if (a == b) {
    return 0;
  }
  const ia = propertyPriority.indexOf(a);
  const ib = propertyPriority.indexOf(b);
  const na = propertyNegativePriority.indexOf(a);
  const nb = propertyNegativePriority.indexOf(b);

  const dota = `${a}`.startsWith('.');
  const dotb = `${b}`.startsWith('.');

  if (dota) {
    if (!dotb) {
      return 1;
    }
  } else {
    if (dotb) {
      return -1;
    }
  }

  if (na > -1) {
    if (nb > -1) {
      return na - nb;
    }
    return 1;
  }

  if (nb > -1) {
    return -1;
  }

  if (ia != -1) {
    return ib != -1 ? ia - ib : -1;
  }

  return ib != -1 || a > b ? 1 : a < b ? -1 : 0;
}

export const elementTag = <Schema.CustomTag>{
  identify: (v: any) => v !== undefined && v !== null && typeof v === 'object' && !Array.isArray(v.valueOf()) && (v instanceof Element || v.valueOf().added),
  default: true,
  tag: 'tag:yaml.org,2002:map',
  resolve: (doc: Document, cst: CST.Node): AST.Node => {
    const map = parseMap(doc, <any>cst);
    return Object.assign(new Element(), map);
  },
  createNode: (schema: Schema, value: any, ctx: Schema.CreateNodeContext) => {
    const sch = <any>schema;
    const s = <any>(YAMLMap);
    const y = new s(schema);

    for (const key of keys(value).toArray().sort(sortWithPriorty)) {

      const v = value[<any>key];
      if (v === undefined || v === null || typeof v === 'function') {
        continue;
      }

      switch (key) {
        case '$path':
        case 'internalData':
          continue;
      }

      // skip empty arrays
      if ((Array.isArray(v) && v.length === 0)) {
        continue;
      }

      if (v instanceof Promise) {
        throw new Error(`Property ${key} is a Promise. Missing an await?`);
      }

      // use createPair (which uses createNode, and ensures that anchors work)
      y.add(sch.createPair(key, v, ctx));
    }

    // todo: see how we can override the anchor name if possible.
    // if (ctx.prevObjects && ctx.prevObjects.get(value)) {
    // console.log(ctx.prevObjects.get(value));
    // ctx.prevObjects.set(value, `AA${ctx.prevObjects.get(value)}`);
    //}
    return y;
  }
};

export function serialize(instance: any) {
  return stringify(instance, { customTags: [elementTag] });
}

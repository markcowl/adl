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

const $scenarios = `${__dirname}/../../test/scenarios`;


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

const eTag = <Schema.CustomTag>{
  identify: (v: any) => !Array.isArray(v) && (v instanceof Element || (v.$path !== undefined)),
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

      switch (key) {
        case '$path':
        case 'internalData':
          continue;
      }
      const v = value[<any>key];
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

const arrayTag = <Schema.CustomTag>{
  identify: (v: any) => Array.isArray(v),
  tag: '!a',
  resolve: (doc: Document, cst: CST.Node): AST.Node => {
    const set = parseSeq(doc, <any>cst);

    return Object.assign([], set);
  },
  createNode: (schema: Schema, value: any, ctx: Schema.CreateNodeContext) => {
    const seq = new YAMLSeq();
    return <any>null;
  }
};
describe('Load OAI3', () => {
  let fs: FileSystem;

  before('create testing filesystem', () => {
    fs = new UrlFileSystem(`${$scenarios}/single`);
  });

  it('load file ', async () => {
    //
    const api = await deserializeOpenAPI3(fs, 'petstore.yaml');

    await writeFile(`${$scenarios}/single/petstore.api.yaml`, stringify(api, { customTags: [eTag] }));
  });

});
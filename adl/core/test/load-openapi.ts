import { describe, it } from 'mocha';
import * as assert from 'assert';
import { readFile, writeFile, readdir, mkdir } from '@azure-tools/async-io';
import { FileSystem, UrlFileSystem } from '../support/file-system';
import { deserializeOpenAPI3 } from '../serialization/openapiv3/serializer';
import { stringify, Document, CST, AST } from 'yaml';
import { Schema, YAMLMap, Scalar, YAMLSeq } from 'yaml/types';
import { parseMap, parseSeq } from 'yaml/util';
import { Element } from '../model/element';
import { items } from '@azure-tools/linq';
import { KeyObject } from 'crypto';
import { isArray } from 'util';

const $scenarios = `${__dirname}/../../test/scenarios`;

class ElementSerializer extends YAMLMap {
  toJSON(arg?: any, ctx?: AST.NodeToJsonContext) {
    const copy = <any>super.toJSON(arg, ctx);
    delete copy.$path;
    return copy;
  }
}

const elementTag = <Schema.CustomTag>{
  identify: (v: any) => v instanceof Function,
  tag: '!FN',
  resolve: (doc: Document, cst: CST.Node): AST.Node => {
    const map = parseMap(doc, <any>cst);
    return Object.assign(new Object(), map);
  },

  stringify: (item: AST.Node, ctx: Schema.StringifyContext, onComment?: () => void, onChompKeep?: () => void): string => {
    return <string><any>undefined;
  },


};
const eTag = <Schema.CustomTag>{
  identify: (v: any) => !Array.isArray(v) && (v instanceof Element || (v.$path !== undefined)),
  default: true,
  tag: 'tag:yaml.org,2002:map',
  resolve: (doc: Document, cst: CST.Node): AST.Node => {
    const map = parseMap(doc, <any>cst);
    return Object.assign(new Element(), map);
  },
  createNode: (schema: Schema, value: any, ctx: Schema.CreateNodeContext) => {
    const y = new YAMLMap();
    for (const each of items(value)) {
      switch (each.key) {
        case '$path':
        case 'internalData':
          continue;
      }
      if ((Array.isArray(each.value) && each.value.length === 0)) {
        continue;
      }
      y.add(each);
    }

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


    await writeFile(`${$scenarios}/single/petstore.api.yaml`, stringify(api, { customTags: [elementTag, eTag] }));
  });

});
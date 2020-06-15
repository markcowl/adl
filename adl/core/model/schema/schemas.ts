import { ApiModel } from '../api-model';
import { Element } from '../element';

function createPrimitiveSchema(declaration: string) {
  return {
    declaration: declaration,
    requiredReferences: []
  };
}

 
export class Schemas extends Element {
  primitives = {
    any: createPrimitiveSchema('any'),
    string: createPrimitiveSchema('string'),
    char: createPrimitiveSchema('char'),
    byte: createPrimitiveSchema('byte'),
    int16: createPrimitiveSchema('int16'),
    int32: createPrimitiveSchema('int32'),
    int64: createPrimitiveSchema('int64'),
    boolean: createPrimitiveSchema('boolean'),
    double: createPrimitiveSchema('double'),
    float: createPrimitiveSchema('float'),
    byteArray: createPrimitiveSchema('Array<byte>'),
    date: createPrimitiveSchema('date'),
    time: createPrimitiveSchema('time'),
    unixtime: createPrimitiveSchema('unixtime'),
    dateTime: createPrimitiveSchema('dateTime'),
    duration: createPrimitiveSchema('duration'),
    uuid: createPrimitiveSchema('uuid'),
    uri: createPrimitiveSchema('uri'),
    password: createPrimitiveSchema('password'),
    odata: createPrimitiveSchema('odata'),
    file: createPrimitiveSchema('file'),
  }

  constructor(protected apiModel: ApiModel) {
    super();
  }
}

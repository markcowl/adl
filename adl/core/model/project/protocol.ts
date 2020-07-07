import { fail } from 'assert';
import { SourceFile } from 'ts-morph';
import { ApiModel, ExtendedSourceFile } from '../api-model';
import { OperationGroup, Parameter, Response, ResponseCollection, Result } from '../operation';
import { Declaration } from '../typescript/reference';


interface ProtocolImpl{
  new(api: ApiModel, sourceFiles?: Array<SourceFile>): Protocol;
}

export abstract class Protocol<T extends Protocol = Protocol<any> > {
  readonly api: ApiModel;

  readonly #files?: Array<ExtendedSourceFile>;

  get files() {
    return this.#files || this.api.files;
  }
  readonly protocolName: string;

  protected constructor(private ctor: ProtocolImpl, api?: ApiModel, sourceFiles?: Array<SourceFile>) {
    this.api = api || (this instanceof ApiModel ? this : fail('requires api model in constructor'));
    this.#files = <Array<ExtendedSourceFile>>sourceFiles;
    this.protocolName = ctor.prototype.constructor.name;

    // when this gets constructed, we have to emit an event to allow extensions to add queries to the instance
    // we need a query function for the extension
    // and then we can bind it as a property so that others can use it.
    // Object.defineProperty(this, 'AzureResource', {get: ()=>this.interfaces});
  }

  query<T>(propertyName: string): Array<T> {
    return (Object.getOwnPropertyNames(this).indexOf(propertyName) > -1 ? (<any>this)[propertyName] : []);
  }

  where(predicate: (file: ExtendedSourceFile) => boolean): Protocol<T> {
    return new this.ctor(this.api, this.files.filter(predicate));
  }

  from(sourceFiles: Array<SourceFile>): Protocol<T> {
    return new this.ctor(this.api, sourceFiles);
  }

  abstract get operationGroups(): Array<OperationGroup>;

  abstract get responseCollections(): Array<Declaration<ResponseCollection>>;

  abstract get responses(): Array<Declaration<Response>>;

  abstract get results(): Array<Declaration<Result>>;

  abstract get parameters(): Array<Declaration<Parameter>>;
}
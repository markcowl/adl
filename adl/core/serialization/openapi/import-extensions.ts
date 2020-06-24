import * as v2 from '@azure-tools/openapi/dist/v2';
import * as v3 from '@azure-tools/openapi/dist/v3';
import { EventEmitter } from '../../eventing/event-emitter';
import { ApiModel } from '../../model/api-model';

interface Events {
  ImportOAI2(apiModel: ApiModel, input: v2.Model): boolean;
  ImportOAI3(apiModel: ApiModel, input: v3.Model): boolean;
}

export class ImportExtension extends EventEmitter<Events>  {
  constructor(private apiModel: ApiModel) {
    super();
  }
  importOAI2( input: v2.Model): Iterable<boolean> {
    return this.iterEmit('ImportOAI2',this.apiModel, input);
  }
  
  importOAI3(input: v3.Model): Iterable<boolean> {
    return this.iterEmit('ImportOAI3', this.apiModel, input);
  }
}
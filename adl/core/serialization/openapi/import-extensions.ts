import * as v2 from '@azure-tools/openapi/dist/v2';
import * as v3 from '@azure-tools/openapi/dist/v3';
import { EventEmitter } from '../../eventing/event-emitter';
import { ApiModel } from '../../model/api-model';

interface Events {
  onImportOAI2(apiModel: ApiModel, input: v2.Model): boolean;
  onImportOAI3(apiModel: ApiModel, input: v3.Model): boolean;
}

export class ImportExtension extends EventEmitter<Events>  {
  onImportOAI2(apiModel: ApiModel, input: v2.Model): Iterable<boolean> {
    return this.iterEmit('onImportOAI2',apiModel, input);
  }
  
  onImportOAI3(apiModel: ApiModel, input: v3.Model): Iterable<boolean> {
    return this.iterEmit('onImportOAI3', apiModel, input);
  }
}
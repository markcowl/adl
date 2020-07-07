import { v2, v3 } from '@azure-tools/openapi';
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
  importOAI2(input: v2.Model): Iterable<boolean> {
    return [...this.iterEmit('ImportOAI2',this.apiModel, input)].select(each => each.result);
  }

  importOAI3(input: v3.Model): Iterable<boolean> {
    return [...this.iterEmit('ImportOAI3', this.apiModel, input)].select(each => each.result);
  }
}
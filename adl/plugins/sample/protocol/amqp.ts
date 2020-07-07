import { OperationGroup, Protocol } from '@azure-tools/adl.core';

class AmqpProtocol extends Protocol {

  get operationGroups(): Array<OperationGroup> {
    return [];
  }
  get responseCollections() {
    return [];
  }
  get responses() {
    return [];
  }
  get results() {
    return [];
  }
  get parameters() {
    return [];
  }
}

export default {  //<ProtocolExtension>
  onInitializeProtocol: () => {
    return AmqpProtocol;
  }
};
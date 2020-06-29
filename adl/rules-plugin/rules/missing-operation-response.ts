import { Declaration, Rule } from '@azure-tools/adl.core';

export default <Rule>{
  activation: 'edit',
  meta: {
    name: 'missing-operation-response',
    code: 'R1009',
    type: 'error',
    description: 'Every operation should have at least one response specified.',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Error'
  },
  onOperation: (model, operation) => {
    let responses = operation.responseCollection;

    if (!operation.responseCollection) {
      return {
        message: `The operation: ${operation.name} doesn't specify any repsonse. Please consider adding one.`
      };
    }
    responses =  responses instanceof Declaration ? responses.target : responses!;
    if (responses.responses.length === 0  ) {
      return {
        message: `The operation: ${operation.name} doesn't specify any repsonse. Please consider adding one.`
      };
    }

    return;
  }
};
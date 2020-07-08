import { isReference, Rule } from '@azure-tools/adl.core';

export default <Rule>{
  activation: 'edit',
  meta: {
    severity: 'error',
    description: 'Every operation should have at least one response specified.',
    documentationUrl: 'PLACEHOLDER',

  },
  onOperation: (model, operation) => {
    let responses = operation.responseCollection;

    if (!responses) {
      return {
        message: `The operation '${operation.name}' doesn't specify any repsonse. Please consider adding one.`
      };
    }
    responses = isReference(responses) ? responses.target : responses;
    if (responses.responses.length === 0) {
      return {
        message: `The operation '${operation.name}' doesn't specify any repsonse. Please consider adding one.`
      };
    }

    return;
  }
};
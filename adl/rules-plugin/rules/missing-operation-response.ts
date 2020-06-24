import { Rule } from '@azure-tools/adl.core/linter/rule';
export default <Rule>{
  runOn: 'edit',
  meta: {
    name: 'missing-operation-response',
    code: 'R1009',
    type: 'error',
    description: 'Every operation should have at least one response specified.',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Error'
  },
  onOperation: (model, operation) => {
    if (operation.responses.length === 0) {
      return {
        message: `The operation: ${operation.name} doesn't specify any repsonse. Please consider adding one.`
      };
    }

    return;
  }
};
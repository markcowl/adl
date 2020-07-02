import { getTagValue, Rule, setTag } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    name: 'http-tag-required',
    code: 'R1009',
    severity: 'warning',
    description: 'It is required to provide the operation and path using the http tag.',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Warning'
  },
  onOperation: (model, operation) => {
    const tag = getTagValue(operation, 'http');
    if (tag !== undefined) {
      return {
        message: `The operation ${operation.name} has the http tag missing.`,
        suggestion: [
          {
            description: 'Provide an http tag.',
            fix: () => {
              setTag(operation, 'http', '@http GET /foo/bar/bin/baz');
            }
          }
        ]
      };
    }

    return;
  }
};
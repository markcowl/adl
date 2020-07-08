import { Rule, setTag } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    severity: 'warning',
    description: 'It is required to provide the operation and path using the http tag.',
    documentationUrl: 'PLACEHOLDER',

  },
  onOperation: (model, operation) => {
    const annotation = operation.annotations?.get('http');
    if (annotation === undefined) {
      return {
        message: `The operation '${operation.name}' has the http tag missing.`,
        suggestions: [
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
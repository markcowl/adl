import { getTagValues, Rule, setTag } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    name: 'parameter-description-required',
    code: 'R1009',
    type: 'warning',
    description: 'Every parameter in an operation needs a description.',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Warning'
  },
  onOperation: (model, operation) => {
    const parameterNames = operation.parameters.map(p => p.name);
    const taggedParamNames = Array.from(getTagValues(operation, 'param')).map(s => s.split(' ')[0]);
    const missingDoc = new Array<string>();
    for (const name of parameterNames) {
      if (parameterNames.includes(name)) {
        missingDoc.push(name.toString());
      }
    }

    if (missingDoc.length > 0) {
      return {
        message: `The parameters ${missingDoc} are missing a description. Consider adding one.`,
        suggestion: [
          {
            description: 'Provide parameter descriptions.',
            fix: () => {
              for (const paramName of missingDoc) {
                setTag(operation, 'param', `${paramName} - <description>`);
              }
            }
          }
        ]
      };
    }

    return;
  }
};
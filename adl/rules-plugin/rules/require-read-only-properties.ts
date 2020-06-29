import { Rule } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    name: 'required-read-only-properties',
    code: 'R2056',
    type: 'error',
    description: 'A model property cannot be both readOnly and required. A readOnly property is something that the server sets when returning the model object while required is a property to be set when sending it as a part of the request body.',
    documentationUrl: 'https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2056-requiredreadonlyproperties',
    category: 'SDK Error'
  },
  onProperty: (model, property) => {
    if (property.readOnly && property) {
      return {
        message: 'A model property cannot be both readOnly and required',
        suggestion: [
          {
            description: 'Set required: false.',
            fix: () => {
              property.readOnly = false;
            }
          },
          {
            description: 'Set remove: false',
            fix: () => {
              property.required = false;
            }
          },
          {
            description: 'Set required: false and readonly: false.',
            fix: () => {
              property.required = false;
              property.readOnly = false;
            }
          }
        ]

      };
    }

    return;
  }
};
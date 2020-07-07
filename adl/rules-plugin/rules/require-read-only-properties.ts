import { Rule } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    id: 'required-read-only-properties',
    severity: 'error',
    description: 'A model property cannot be both readOnly and required. A readOnly property is something that the server sets when returning the model object while required is a property to be set when sending it as a part of the request body.',
    documentationUrl: 'https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2056-requiredreadonlyproperties',
    category: 'SDK Error'
  },
  onProperty: (model, property) => {
    if (property.readOnly && property.required) {
      return {
        message: 'A model property cannot be both readOnly and required',
        suggestions: [
          {
            description: 'Unmark as readonly.',
            fix: () => {
              property.readOnly = false;
            }
          },
          {
            description: 'Mark as optional.',
            fix: () => {
              property.required = false;
            }
          }
        ]
      };
    }

    return;
  }
};
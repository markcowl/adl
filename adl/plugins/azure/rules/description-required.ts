import { NamedElement, Rule, RuleResult } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    severity: 'error',
    description: 'The element lacks a description',
    documentationUrl: 'URL',

  },
  data: {
    minLength: 10
  },
  onAliasType: (model, alias,data) => checkDescription('alias', alias,data),
  onDeclaredResponseCollections: (model, reponseCollection, data) => checkDescription('reponseCollection', reponseCollection,data),
  onDeclaredResponses: (model, response, data) => checkDescription('response', response, data),
  onDeclaredResults: (model, result, data) => checkDescription('result', result, data),
  onDeclaredParameters: (model, parameter, data) => checkDescription('parameter', parameter, data),
  onEnumType: (model, enumType, data) => checkDescription('enumType', enumType, data),
  onEnumValue: (model, enumValue, data) => checkDescription('enumValue', enumValue, data),
  onModelType: (model, modelType, data) => checkDescription('modelType', modelType, data),
  onOperationGroup: (model, operationGroup, data) => checkDescription('operationGroup', operationGroup, data),
  onOperation: (model, operation, data) => checkDescription('operation', operation, data),
  onProperty: (model, property, data) => checkDescription('property', property, data),
  // onParameter: (model, parameter) => checkDescription('parameter', parameter)
};

function checkDescription(nodeType: string, element: NamedElement<any>, data: any): RuleResult |undefined  {
  if (element.description === undefined) {
    return {
      message: `The ${nodeType} '${element.name}' lacks a description. Please consider adding one.`
    };
  }

  return;
}

import { NamedElement, Rule, RuleResult } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    id: 'version-format',
    severity: 'error',
    description: 'API version must be in the format: yyyy - MM - dd, optionally followed by - preview, - alpha, -beta, -rc, -privatepreview.',
    documentationUrl: 'URL',
    category: 'SDK Error'
  },
  onAliasType: (model, alias) => checkDescription('alias', alias),
  onDeclaredResponseCollections: (model, reponseCollection) => checkDescription('reponseCollection', reponseCollection),
  onDeclaredResponses: (model, response) => checkDescription('response', response),
  onDeclaredResults: (model, result) => checkDescription('result', result),
  onDeclaredParameters: (model, parameter) => checkDescription('parameter', parameter),
  onEnumType: (model, enumType) => checkDescription('enumType', enumType),
  onEnumValue: (model, enumValue) => checkDescription('enumValue', enumValue),
  onModelType: (model, modelType) => checkDescription('modelType', modelType),
  onOperationGroup: (model, operationGroup) => checkDescription('operationGroup', operationGroup),
  onOperation: (model, operation) => checkDescription('operation', operation),
  onProperty: (model, property) => checkDescription('property', property),
  // onParameter: (model, parameter) => checkDescription('parameter', parameter)
};

function checkDescription(nodeType: string, element: NamedElement<any>): RuleResult | undefined {
  if (element.description === undefined) {
    return {
      message: `The ${nodeType} '${element.name}' lacks a description. Please consider adding one.`
    };
  }

  return;
}

// This rule suggests three ways to fix an error.
// The user should be able to choose a fix using code actions.
import { Rule, RuleResult } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    name: 'version-format',
    code: 'R2056',
    severity: 'error',
    description: 'API version must be in the format: yyyy - MM - dd, optionally followed by - preview, - alpha, -beta, -rc, -privatepreview.',
    documentationUrl: 'URL',
    category: 'SDK Error'
  },
  onAliasType: (model, alias) => checkVersionFormat(alias),
  onDeclaredResponseCollections: (model, reponseCollection) => checkVersionFormat(reponseCollection),
  onDeclaredResponses: (model, response) => checkVersionFormat(response),
  onDeclaredResults: (model, result) =>  checkVersionFormat(result),
  onDeclaredParameters: (model, parameter) => checkVersionFormat(parameter),
  onEnumType: (model, enumType) => checkVersionFormat(enumType),
  onEnumValue: (model, enumValue) => checkVersionFormat(enumValue),
  onModelType: (model, modelType) => checkVersionFormat(modelType),
  onOperationGroup: (model, operationGroup) => checkVersionFormat(operationGroup),
  onOperation: (model, operation) => checkVersionFormat(operation),
  onProperty: (model, property) => checkVersionFormat(property),
  //onParameter: (model, parameter) => checkVersionFormat(parameter)
};

function checkVersionFormat(element: any): RuleResult | undefined {
  const versionRegex = /^(20\d{2})-(0[1-9]|1[0-2])-((0[1-9])|[12][0-9]|3[01])(-(preview|alpha|beta|rc|privatepreview))?$/g;
  if (!element.versionInfo.since?.match(versionRegex)) {
    return {
      message: `The api version: ${element.versionInfo.since} does not have the correct format. 
                  API version must be in the format: yyyy - MM - dd, optionally followed 
                  by - preview, -alpha, -beta, -rc, -privatepreview.`
    };
  }

  return;
}

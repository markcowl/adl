// This rule suggests three ways to fix an error.
// The user should be able to choose a fix using code actions.

import { ParameterElement } from '../../model/http/parameter';
import { Operation, OperationGroup, ResponseCollection, ResponseElement, ResultElement } from '../../model/operation';
import { AliasType } from '../../model/schema/alias';
import { EnumType, EnumValueElement } from '../../model/schema/enum';
import { ModelType } from '../../model/schema/model';
import { Property } from '../../model/schema/property';
import { Declaration } from '../../model/typescript/reference';
import { Rule, RuleResult } from '../rule';
export default <Rule>{
  runOn: 'edit',
  meta: {
    name: 'required-read-only-properties',
    code: 'R2056',
    type: 'error',
    description: 'A model property cannot be both readOnly and required. A readOnly property is something that the server sets when returning the model object while required is a property to be set when sending it as a part of the request body.',
    documentationUrl: 'https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2056-requiredreadonlyproperties',
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
  onParameter: (model, parameter) => checkVersionFormat(parameter)
};

type versionedNode = AliasType
  | Declaration<ResponseCollection>
  | Declaration<ResponseElement>
  | Declaration<ResultElement>
  | Declaration<ParameterElement>
  | EnumValueElement
  | EnumType
  | ModelType
  | Operation
  | OperationGroup
  | Property
  | ParameterElement;

function checkVersionFormat(element: versionedNode): Array<RuleResult> | undefined {
  const versionRegex = /^(20\d{2})-(0[1-9]|1[0-2])-((0[1-9])|[12][0-9]|3[01])(-(preview|alpha|beta|rc|privatepreview))?$/g;
  if (!element.versionInfo.since?.match(versionRegex)) {
    return [
      {
        message: `The api version: ${element.versionInfo.since} does not have the correct format. 
                  API version must be in the format: yyyy - MM - dd, optionally followed 
                  by - preview, -alpha, -beta, -rc, -privatepreview.`
      }
    ];
  }

  return;
}

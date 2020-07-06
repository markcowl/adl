import { getTagValues, NamedElement, Rule, RuleResult } from '@azure-tools/adl.core';
export default <Rule>{
  activation: 'edit',
  meta: {
    id: 'limit-on-version-tags',
    severity: 'error',
    description: 'Every element should only at most one "since", "deleted" and "deprecated" tag.',
    documentationUrl: 'URL',
    category: 'SDK Error'
  },
  onAliasType: (model, alias) => checkVersionTags('alias', alias),
  onDeclaredResponseCollections: (model, reponseCollection) => checkVersionTags('reponseCollection', reponseCollection),
  onDeclaredResponses: (model, response) => checkVersionTags('response', response),
  onDeclaredResults: (model, result) => checkVersionTags('result', result),
  onDeclaredParameters: (model, parameter) => checkVersionTags('parameter', parameter),
  onEnumType: (model, enumType) => checkVersionTags('enumType', enumType),
  onEnumValue: (model, enumValue) => checkVersionTags('enumValue', enumValue),
  onModelType: (model, modelType) => checkVersionTags('modelType', modelType),
  onOperationGroup: (model, operationGroup) => checkVersionTags('operationGroup', operationGroup),
  onOperation: (model, operation) => checkVersionTags('operation', operation),
  onProperty: (model, property) => checkVersionTags('property', property)
};

function checkVersionTags(nodeType: string, element: NamedElement<any>): RuleResult | undefined {
  const sinceTagsCount = [...getTagValues(element, 'since')].length;
  const deletedTagsCount = [...getTagValues(element, 'deleted')].length;
  const deprecatedTagsCount = [...getTagValues(element, 'deprecated')].length;
  if (sinceTagsCount > 0 || deletedTagsCount > 0 || deprecatedTagsCount > 0) {
    return {
      message: `The ${nodeType} '${element.name}' contains multiple version related tags of the same kind. There should be at most one 'since', 'deleted' and 'deprecated' tag.`
    };
  }

  return;
}

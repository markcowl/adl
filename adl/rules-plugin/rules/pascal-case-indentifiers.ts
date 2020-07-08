import { NamedElement, Rule, RuleResult } from '@azure-tools/adl.core';
import { getPascalIdentifier } from '../utils';
export default <Rule>{
  activation: 'edit',
  meta: {
    severity: 'warning',
    description: 'PLACEHOLDER',
    documentationUrl: 'PLACEHOLDER',

  },
  onModelType: (model, modelType) => checkPascalIdentifier('modelType', modelType),
  onEnumType: (model, e) => checkPascalIdentifier('enumType', e),
  onOperation: (model, operation) => checkPascalIdentifier('operation', operation)
};

function checkPascalIdentifier(type: string, element: NamedElement<any>): RuleResult | undefined {
  const pascalCaseRegex = /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/g;
  if (!element.name.toString().match(pascalCaseRegex)) {
    return {
      message: `The ${type} '${element.name.toString()}' must follow pascal case style.`,
      suggestions: [
        {
          description: 'Rename to follow pascal case style.',
          fix: () => {
            element.name = getPascalIdentifier(element.name.toString());
          }
        }
      ]
    };
  }

  return;
}

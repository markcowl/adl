import { NamedElement, Rule, RuleResult } from '@azure-tools/adl.core';
import { camelCase } from '../utils';

export default <Rule>{
  activation: 'edit',
  meta: {
    id: 'camel-case-identifiers',
    severity: 'warning',
    description: 'PLACEHOLDER',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Warning'
  },
  onParameter: (model, parameter) => checkCamelCaseIdentifier('parameter', parameter),
  onProperty: (model, property) => checkCamelCaseIdentifier('property', property),
  onEnumValue: (model, enumValue) => checkCamelCaseIdentifier('enumValue', enumValue),
};

function checkCamelCaseIdentifier(type: string, element: NamedElement<any>): RuleResult | undefined {
  const camelCaseRegex = /^[a-z]+(?:[A-Z][a-z]+)*$/g;
  if (!element.name.toString().match(camelCaseRegex)) {
    return {
      message: `The ${type} '${element.name.toString()}' must follow camel case style.`,
      suggestion: [
        {
          description: 'Rename to follow camel case style.',
          fix: () => {
            element.name = camelCase(element.name.toString());
          }
        }
      ]
    };
  }

  return;
}

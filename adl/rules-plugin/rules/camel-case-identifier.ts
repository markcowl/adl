import { NamedElement, Rule, RuleResult } from '@azure-tools/adl.core';
import { getPascalIdentifier } from '../utils';

export default <Rule>{
  activation: 'disabled',
  meta: {
    id: 'camel-case-identifiers',
    severity: 'warning',
    description: 'PLACEHOLDER',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Warning'
  },
  onParameter: (model, parameter) => checkCamelCaseIdentifier('parameter', parameter),
  onProperty: (model, property) => checkCamelCaseIdentifier('property', property),
  onEnumValue: (model, enumValue) => checkCamelCaseIdentifier('enumValue', enumValue)
};

function checkCamelCaseIdentifier(type: string, element: NamedElement<any>): RuleResult | undefined {
  const camelCaseRegex = /^[a-z][a-z0-9]+\.([A-Z]+[a-z0-9]+)+$/g;
  if (!element.versionInfo.since?.match(camelCaseRegex)) {
    return {
      message: `The ${type} '${element.name.toString()}' must follow pascal case style.`,
      suggestion: [
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

import { NamedElement } from '../../model/typescript/named-element';
import { Rule, RuleResult } from '../rule';
import { getPascalIdentifier } from '../utils';
export default <Rule>{
  runOn: 'edit',
  meta: {
    name: 'pascal-case-identifiers',
    code: 'PLACEHOLDER',
    type: 'warning',
    description: 'PLACEHOLDER',
    documentationUrl: 'PLACEHOLDER',
    category: 'SDK Warning'
  },
  onModelType: (model, modelType) => checkPascalIdentifier('modelType', modelType),
  onEnumType: (model, e) => checkPascalIdentifier('enumType', e),
  onOperation: (model, operation) => checkPascalIdentifier('operation', operation)
};

function checkPascalIdentifier(type: string, element: NamedElement<any>): RuleResult | undefined {
  const pascalCaseRegex = /^[A-Z][a-z0-9]+\.([A-Z]+[a-z0-9]+)+$/g;
  if (!element.versionInfo.since?.match(pascalCaseRegex)) {
    return {
      message: `The ${type}: ${ element.name.toString() } must follow pascal case style.`,
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

import { ApiModel } from '../model/api-model';
import { Operation } from '../model/http/operation';
import { OperationGroup, ParameterElement, ResponseCollection, ResponseElement, ResultElement } from '../model/operation';
import { AliasType } from '../model/schema/alias';
import { EnumType, EnumValueElement } from '../model/schema/enum';
import { ModelType } from '../model/schema/model';
import { Property } from '../model/schema/property';
import { Declaration } from '../model/typescript/reference';

export interface Rule {
  runOn: 'edit' | 'onDemand';
  meta: RuleMetaData;
  onAliasType?: (model: ApiModel, aliasType: AliasType) => RuleResult | undefined;
  onDeclaredResponseCollections?: (model: ApiModel, reponseCollection: Declaration<ResponseCollection>) => RuleResult | undefined;
  onDeclaredResponses?: (model: ApiModel, response: Declaration<ResponseElement>) => RuleResult | undefined;
  onDeclaredResults?: (model: ApiModel, result: Declaration<ResultElement>) => RuleResult | undefined;
  onDeclaredParameters?: (model: ApiModel, parameter: Declaration<ParameterElement>) => RuleResult | undefined;
  onEnumType?: (model: ApiModel, enumType: EnumType) => RuleResult | undefined;
  onEnumValue?: (model: ApiModel, enumValue: EnumValueElement) => RuleResult | undefined;
  onModelType?: (model: ApiModel, modelType: ModelType) => RuleResult | undefined;
  onOperationGroup?: (model: ApiModel, operationGroup: OperationGroup) => RuleResult | undefined;
  onOperation?: (model: ApiModel, operation: Operation) => RuleResult | undefined;
  onProperty?: (model: ApiModel, property: Property) => RuleResult | undefined;
  onParameter?: (model: ApiModel, parameter: ParameterElement) => RuleResult | undefined;
}

export interface RuleMetaData {
  // The name of the rule
  name: string;

  // The rule type.
  type: 'error' | 'warning';

  code: string;

  // Description of what the rule does
  description: string;

  // Additional documntation for the rule can be found at the url
  documentationUrl?: string;

  // The rule category.
  // There could be cosmetic warnings (e.g. names)
  // or best practices warnings  (e.g. including description)
  category?: string;
}


export interface RuleResult {
  message?: string;
  suggestion?: Array<Fix>;
}

export interface Fix {
  description?: string;
  fix: () => void;
}
import { Activation } from '../eventing/activation';
import { EventListener, ListenerMetaData } from '../eventing/event-listener';
import { ApiModel } from '../model/api-model';
import { Operation } from '../model/http/operation';
import { OperationGroup, Parameter, Response, ResponseCollection, Result } from '../model/operation';
import { AliasType } from '../model/schema/alias';
import { EnumType, EnumValueElement } from '../model/schema/enum';
import { ModelType } from '../model/schema/model';
import { Property } from '../model/schema/property';
import { Range } from '../model/typescript/position';
import { Declaration } from '../model/typescript/reference';

export interface Rule extends EventListener {
  activation: Activation.disabled | Activation.edit | Activation.demand;
  meta: RuleMetaData;
  onAliasType?: (model: ApiModel, aliasType: AliasType) => RuleResult | undefined;
  onDeclaredResponseCollections?: (model: ApiModel, reponseCollection: Declaration<ResponseCollection>) => RuleResult | undefined;
  onDeclaredResponses?: (model: ApiModel, response: Declaration<Response>) => RuleResult | undefined;
  onDeclaredResults?: (model: ApiModel, result: Declaration<Result>) => RuleResult | undefined;
  onDeclaredParameters?: (model: ApiModel, parameter: Declaration<Parameter>) => RuleResult | undefined;
  onEnumType?: (model: ApiModel, enumType: EnumType) => RuleResult | undefined;
  onEnumValue?: (model: ApiModel, enumValue: EnumValueElement) => RuleResult | undefined;
  onModelType?: (model: ApiModel, modelType: ModelType) => RuleResult | undefined;
  onOperationGroup?: (model: ApiModel, operationGroup: OperationGroup) => RuleResult | undefined;
  onOperation?: (model: ApiModel, operation: Operation) => RuleResult | undefined;
  onProperty?: (model: ApiModel, property: Property) => RuleResult | undefined;
  onParameter?: (model: ApiModel, parameter: Parameter) => RuleResult | undefined;
}

export declare type RuleSeverity = 'error' | 'warning' | 'info' | 'hint';

/**
 * The diagnostic's severity.
 */
export declare namespace RuleSeverity {
  /**
   * Reports an error.
   */
  const Error: 1;
  /**
   * Reports a warning.
   */
  const Warning: 2;
  /**
   * Reports an information.
   */
  const Information: 3;
  /**
   * Reports a hint.
   */
  const Hint: 4;
}

export interface RuleMetaData extends ListenerMetaData {

  /**
   * The rule name
   */
  name: string;

  /**
   * How severe the rule is. It can be a error, warning, information or hint.
   */
  severity: RuleSeverity;

  /**
   * A code associated with the rule. Usually appers in the user interface.
   */
  code?: number|string;

  /**
   * Description about the rules. 
   */
  description: string;

  /**
   * Additional documntation for the rule can be found at the url
   */
  documentationUrl?: string;
}


export interface RuleResult {
/**
 * The range at which the message applies
 */
  range?: Range;

/**
 * The rule's message. It usually appears in the user interface
 */
  message?: string;

  /**
  * An array of possible fixes.
  */
  suggestion?: Array<Fix>;
}

export interface Fix {
  /**
   * This includes what the fix does. If there is not a programmatic fix
   * to be applied, this provides a suggestion to the user.
   */
  description?: string;
  
  /**
   * This function is used to provide a fix on the node.
   */
  fix?: () => void;
}
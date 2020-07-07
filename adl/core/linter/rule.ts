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

export declare type RuleSeverity = 'error' | 'warning' ;

export interface RuleMetaData extends ListenerMetaData {

  /**
   * The rule id.
   */
  id: number| string;

  /**
   * How severe the rule is. It can be a error, warning, information or hint.
   */
  severity: RuleSeverity;

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

export interface LinterDiagnostic {
  /**
     * The range at which the message applies
     */
  range: Range;

  /**
   * The diagnostic's severity. Can be omitted. If omitted it is up to the
   * client to interpret diagnostics as error, warning, info or hint.
   */
  severity: RuleSeverity;

  /**
   * The diagnostic's code, which usually appear in the user interface.
   */
  code?: number | string;

  /**
   * A human-readable string describing the source of this
   * diagnostic, e.g. 'typescript' or 'super lint'. It usually
   * appears in the user interface.
   */
  source?: string;

  /**
   * The diagnostic's message. It usually appears in the user interface
   */
  message: string;

  /**
  * An array of possible fixes.
  */
  suggestion?: Array<Fix>;
}
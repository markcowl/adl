import { EventEmitter } from '../eventing/event-emitter';
import { ApiModel, Files } from '../model/api-model';
import { Operation, OperationGroup, Parameter, Response, ResponseCollection, Result } from '../model/operation';
import { AliasType } from '../model/schema/alias';
import { EnumType, EnumValueElement } from '../model/schema/enum';
import { ModelType } from '../model/schema/model';
import { Property } from '../model/schema/property';
import { Declaration } from '../model/typescript/reference';
import { TSElement } from '../model/typescript/typescript-element';
import { LinterDiagnostic, RuleMetaData, RuleResult } from './rule';

interface Events {
  AliasType(model: ApiModel, aliasType: AliasType): RuleResult | undefined;
  DeclaredResponseCollections(model: ApiModel, reponseCollection: Declaration<ResponseCollection>): RuleResult | undefined;
  DeclaredResponses(model: ApiModel, response: Declaration<Response>): RuleResult | undefined;
  DeclaredResults(model: ApiModel, result: Declaration<Result>): RuleResult | undefined;
  DeclaredParameters(model: ApiModel, parameter: Declaration<Parameter>): RuleResult | undefined;
  EnumType(model: ApiModel, enumType: EnumType): RuleResult | undefined;
  EnumValue(model: ApiModel, enumValue: EnumValueElement): RuleResult | undefined;
  ModelType(model: ApiModel, modelType: ModelType): RuleResult | undefined;
  OperationGroup(model: ApiModel, operationGroup: OperationGroup): RuleResult | undefined;
  Operation(model: ApiModel, operation: Operation): RuleResult | undefined;
  Property(model: ApiModel, property: Property): RuleResult | undefined;
  Parameter(model: ApiModel, parameter: Parameter): RuleResult | undefined;
}

export class Linter extends EventEmitter<Events> {
  constructor(protected apiModel: ApiModel) {
    super();
  }

  getLinterDiagnostic(element: TSElement<any>, ruleMetadata: RuleMetaData, ruleResult: RuleResult): LinterDiagnostic {
    return {
      range: element.range,
      severity: ruleMetadata.severity,
      code: ruleMetadata.id,
      source: 'adl-linter',
      message: ruleResult.message|| ruleMetadata.description,
      suggestions: ruleResult.suggestions
    };
  }

  *run(files?: Files): Iterable<LinterDiagnostic> {
    files = files || this.apiModel;
    const model = this.apiModel;

    // aliasTypes
    for (const aliasType of files.aliasTypes) {
      for (const {meta, result} of this.iterEmit('AliasType', model, aliasType)){
        yield this.getLinterDiagnostic(aliasType, <RuleMetaData>meta, result);
      }
    }

    // globally declared stuff
    for (const responseCollection of files.responseCollections) {
      for (const { meta, result } of this.iterEmit('DeclaredResponseCollections', model, responseCollection)) {
        yield this.getLinterDiagnostic(responseCollection, <RuleMetaData>meta, result);
      }
    }

    for (const response of files.responses) {
      for (const { meta, result } of this.iterEmit('DeclaredResponses', model, response)) {
        yield this.getLinterDiagnostic(response, <RuleMetaData>meta, result);
      }
    }

    for (const result of files.results) {
      for (const { meta, result:ruleResult } of this.iterEmit('DeclaredResults', model, result)) {
        yield this.getLinterDiagnostic(result, <RuleMetaData>meta, ruleResult);
      }
    }

    for (const parameter of files.parameters) {
      for (const { meta, result } of this.iterEmit('DeclaredParameters', model, parameter)) {
        yield this.getLinterDiagnostic(parameter, <RuleMetaData>meta, result);
      }
    }

    for (const responseCollection of files.responseCollections) {
      for (const { meta, result } of this.iterEmit('DeclaredResponseCollections', model, responseCollection)) {
        yield this.getLinterDiagnostic(responseCollection, <RuleMetaData>meta, result);
      }
    }

    // enumTypes and values
    for (const enumType of files.enumTypes) {
      for (const { meta, result } of this.iterEmit('EnumType', model, enumType)) {
        yield this.getLinterDiagnostic(enumType, <RuleMetaData>meta, result);
      }

      for (const value of enumType.values) {
        for (const { meta, result } of this.iterEmit('EnumValue', model, value)) {
          yield this.getLinterDiagnostic(value, <RuleMetaData>meta, result);
        }
      }
    }

    // modelTypes and properties
    for (const modelType of files.modelTypes) {
      for (const { meta, result } of this.iterEmit('ModelType', model, modelType)) {
        yield this.getLinterDiagnostic(modelType, <RuleMetaData>meta, result);
      }
      for (const property of modelType.properties) {
        for (const { meta, result } of this.iterEmit('Property', model, property)) {
          yield this.getLinterDiagnostic(property, <RuleMetaData>meta, result);
        }
      }
    }

    // operationGroups, operations, parameters
    for (const group of files.operationGroups) {
      for (const { meta, result } of this.iterEmit('OperationGroup', model, group)) {
        yield this.getLinterDiagnostic(group, <RuleMetaData>meta, result);
      }
      for (const operation of group.operations) {
        for (const { meta, result } of this.iterEmit('Operation', model, operation)) {
          yield this.getLinterDiagnostic(operation, <RuleMetaData>meta, result);
        }
        for (const parameter of operation.parameters) {
          for (const { meta, result } of this.iterEmit('Parameter', model, parameter)) {
            yield this.getLinterDiagnostic(parameter, <RuleMetaData>meta, result);
          }
        }
      }
    }
  }
}
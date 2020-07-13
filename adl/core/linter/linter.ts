import { Activation } from '../eventing/activation';
import { EventEmitter, EventKey, Result as EventResult } from '../eventing/event-emitter';
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

  getLinterDiagnostic<T, K extends EventKey<T>>(element: TSElement<any>, data: EventResult<T,K>): LinterDiagnostic {
    const result = <RuleResult>data.result;
    const meta = <RuleMetaData>data.meta;
    return {
      range: result.range || element.range,
      severity: meta.severity,
      code: data.id,
      source: 'adl-linter',
      message: result.message|| meta.description,
      suggestions: result.suggestions,
      documentationUrl: meta.documentationUrl
    };
  }

  *run(activation: Activation, files?: Files): Iterable<LinterDiagnostic> {
    files = files || this.apiModel;
    const model = this.apiModel;

    // aliasTypes
    for (const aliasType of files.aliasTypes) {
      for (const each of this.iterEmit(activation, 'AliasType', model, aliasType)){
        yield this.getLinterDiagnostic(aliasType,each);
      }
    }

    // globally declared stuff
    for (const responseCollection of files.responseCollections) {
      for (const each of this.iterEmit(activation, 'DeclaredResponseCollections', model, responseCollection)) {
        yield this.getLinterDiagnostic(responseCollection, each);
      }
    }

    for (const response of files.responses) {
      for (const each of this.iterEmit(activation, 'DeclaredResponses', model, response)) {
        yield this.getLinterDiagnostic(response, each);
      }
    }

    for (const result of files.results) {
      for (const each of this.iterEmit(activation, 'DeclaredResults', model, result)) {
        yield this.getLinterDiagnostic(result,each);
      }
    }

    for (const parameter of files.parameters) {
      for (const each of this.iterEmit(activation, 'DeclaredParameters', model, parameter)) {
        yield this.getLinterDiagnostic(parameter, each);
      }
    }

    for (const responseCollection of files.responseCollections) {
      for (const each of this.iterEmit(activation, 'DeclaredResponseCollections', model, responseCollection)) {
        yield this.getLinterDiagnostic(responseCollection, each);
      }
    }

    // enumTypes and values
    for (const enumType of files.enumTypes) {
      for (const each of this.iterEmit(activation, 'EnumType', model, enumType)) {
        yield this.getLinterDiagnostic(enumType, each);
      }

      for (const value of enumType.values) {
        for (const each of this.iterEmit(activation, 'EnumValue', model, value)) {
          yield this.getLinterDiagnostic(value, each);
        }
      }
    }

    // modelTypes and properties
    for (const modelType of files.modelTypes) {
      for (const each of this.iterEmit(activation, 'ModelType', model, modelType)) {
        yield this.getLinterDiagnostic(modelType, each);
      }
      for (const property of modelType.properties) {
        for (const each of this.iterEmit(activation, 'Property', model, property)) {
          yield this.getLinterDiagnostic(property, each);
        }
      }
    }

    // operationGroups, operations, parameters
    for (const group of files.operationGroups) {
      for (const each of this.iterEmit(activation, 'OperationGroup', model, group)) {
        yield this.getLinterDiagnostic(group, each);
      }
      for (const operation of group.operations) {
        for (const each of this.iterEmit(activation, 'Operation', model, operation)) {
          yield this.getLinterDiagnostic(operation, each);
        }
        for (const parameter of operation.parameters) {
          for (const each of this.iterEmit(activation, 'Parameter', model, parameter)) {
            yield this.getLinterDiagnostic(parameter, each);
          }
        }
      }
    }
  }
}
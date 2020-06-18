import { ApiModel, Files } from '../model/api-model';
import { Operation, OperationGroup, ParameterElement, ResponseCollection, ResponseElement, ResultElement } from '../model/operation';
import { AliasType } from '../model/schema/alias';
import { EnumType, EnumValueElement } from '../model/schema/enum';
import { ModelType } from '../model/schema/model';
import { Property } from '../model/schema/property';
import { Declaration } from '../model/typescript/reference';
import { EventEmitter } from '../support/event-emitter';
import { RuleResult } from './rule';

interface Events {
  aliasType(model: ApiModel, aliasType: AliasType): Array<RuleResult> | undefined;
  declaredResponseCollections(model: ApiModel, reponseCollection: Declaration<ResponseCollection>): Array<RuleResult> | undefined;
  declaredResponses(model: ApiModel, response: Declaration<ResponseElement>): Array<RuleResult> | undefined;
  declaredResults(model: ApiModel, result: Declaration<ResultElement>): Array<RuleResult> | undefined;
  declaredParameters(model: ApiModel, parameter: Declaration<ParameterElement>): Array<RuleResult> | undefined;
  enumType(model: ApiModel, enumType: EnumType): Array<RuleResult> | undefined;
  enumValue(model: ApiModel, enumValue: EnumValueElement): Array<RuleResult> | undefined;
  modelType(model: ApiModel, modelType: ModelType): Array<RuleResult> | undefined;
  operationGroup(model: ApiModel, operationGroup: OperationGroup): Array<RuleResult> | undefined;
  operation(model: ApiModel, operation: Operation): Array<RuleResult> | undefined;
  property(model: ApiModel, property: Property): Array<RuleResult> | undefined;
  parameter(model: ApiModel, parameter: ParameterElement): Array<RuleResult> | undefined;
}

export class Linter extends EventEmitter<Events> {
  *run(files: Files) {
    const model = files.api;

    // aliasTypes
    for (const aliasType of files.aliasTypes) {
      yield* this.iterEmit('aliasType', model, aliasType);
    }

    // globally declared stuff
    for (const responseCollection of files.responseCollections) {
      yield this.iterEmit('declaredResponseCollections', model, responseCollection);
    }

    for (const response of files.responses) {
      yield this.iterEmit('declaredResponses', model, response);
    }

    for (const result of files.results) {
      yield this.iterEmit('declaredResults', model, result);
    }

    for (const parameter of files.parameters) {
      yield this.iterEmit('declaredParameters', model, parameter);
    }

    for (const responseCollection of files.responseCollections) {
      yield this.iterEmit('declaredResponseCollections', model, responseCollection);
    }

    for (const responseCollection of files.responseCollections) {
      yield this.iterEmit('declaredResponseCollections', model, responseCollection);
    }

    // enumTypes and values
    for (const enumType of files.enumTypes) {
      yield this.iterEmit('enumType', model, enumType);
      for (const value of enumType.values) {
        yield this.iterEmit('enumValue', model, value);
      }
    }

    // modelTypes and properties
    for (const modelType of files.modelTypes) {
      yield this.iterEmit('modelType', model, modelType);
      for (const property of modelType.getProperties()) {
        yield this.iterEmit('property', model, property);
      }
    }

    // operationGroups, operations, parameters
    for (const group of files.operationGroups) {
      yield this.iterEmit('operationGroup', model, group);
      for (const operation of group.operations) {
        yield this.iterEmit('operation', model, operation);
        for (const parameter of operation.parameters) {
          yield this.iterEmit('parameter', model, parameter);
        }
      }
    }
  }
}
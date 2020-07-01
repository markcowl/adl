import { EventEmitter } from '../eventing/event-emitter';
import { ApiModel, Files } from '../model/api-model';
import { Operation, OperationGroup, ParameterElement, ResponseCollection, ResponseElement, ResultElement } from '../model/operation';
import { AliasType } from '../model/schema/alias';
import { EnumType, EnumValueElement } from '../model/schema/enum';
import { ModelType } from '../model/schema/model';
import { Property } from '../model/schema/property';
import { Declaration } from '../model/typescript/reference';
import { RuleResult } from './rule';

interface Events {
  AliasType(model: ApiModel, aliasType: AliasType): RuleResult | undefined;
  DeclaredResponseCollections(model: ApiModel, reponseCollection: Declaration<ResponseCollection>): RuleResult | undefined;
  DeclaredResponses(model: ApiModel, response: Declaration<ResponseElement>): RuleResult | undefined;
  DeclaredResults(model: ApiModel, result: Declaration<ResultElement>): RuleResult | undefined;
  DeclaredParameters(model: ApiModel, parameter: Declaration<ParameterElement>): RuleResult | undefined;
  EnumType(model: ApiModel, enumType: EnumType): RuleResult | undefined;
  EnumValue(model: ApiModel, enumValue: EnumValueElement): RuleResult | undefined;
  ModelType(model: ApiModel, modelType: ModelType): RuleResult | undefined;
  OperationGroup(model: ApiModel, operationGroup: OperationGroup): RuleResult | undefined;
  Operation(model: ApiModel, operation: Operation): RuleResult | undefined;
  Property(model: ApiModel, property: Property): RuleResult | undefined;
  Parameter(model: ApiModel, parameter: ParameterElement): RuleResult | undefined;
}

export class Linter extends EventEmitter<Events> {
  constructor(protected apiModel: ApiModel ) {
    super();
  }
  *run(files?: Files): Iterable<RuleResult> {
    files = files || this.apiModel;
    const model = this.apiModel;

    // aliasTypes
    for (const aliasType of files.aliasTypes) {
      yield*  [ ... this.iterEmit('AliasType', model, aliasType) ].select( each => each.result);
    }

    // globally declared stuff
    for (const responseCollection of files.responseCollections) {
      yield* [ ... this.iterEmit('DeclaredResponseCollections', model, responseCollection)].select( each => each.result);
    }

    for (const response of files.responses) {
      yield* [ ... this.iterEmit('DeclaredResponses', model, response)].select( each => each.result);
    }

    for (const result of files.results) {
      yield* [ ... this.iterEmit('DeclaredResults', model, result)].select( each => each.result);
    }

    for (const parameter of files.parameters) {
      yield* [ ... this.iterEmit('DeclaredParameters', model, parameter)].select( each => each.result);
    }

    for (const responseCollection of files.responseCollections) {
      yield* [ ... this.iterEmit('DeclaredResponseCollections', model, responseCollection)].select( each => each.result);
    }

    for (const responseCollection of files.responseCollections) {
      yield* [ ... this.iterEmit('DeclaredResponseCollections', model, responseCollection)].select( each => each.result);
    }

    // enumTypes and values
    for (const enumType of files.enumTypes) {
      yield* [ ... this.iterEmit('EnumType', model, enumType)].select( each => each.result);
      for (const value of enumType.values) {
        yield* [ ... this.iterEmit('EnumValue', model, value)].select( each => each.result);
      }
    }

    // modelTypes and properties
    for (const modelType of files.modelTypes) {
      yield* [ ... this.iterEmit('ModelType', model, modelType)].select( each => each.result);
      for (const property of modelType.properties) {
        yield* [ ... this.iterEmit('Property', model, property)].select( each => each.result);
      }
    }

    // operationGroups, operations, parameters
    for (const group of files.operationGroups) {
      yield* [ ... this.iterEmit('OperationGroup', model, group)].select( each => each.result);
      for (const operation of group.operations) {
        yield* [ ... this.iterEmit('Operation', model, operation)].select( each => each.result);
        for (const parameter of operation.parameters) {
          yield* [ ... this.iterEmit('Parameter', model, parameter)].select( each => each.result);
        }
      }
    }
  }
}
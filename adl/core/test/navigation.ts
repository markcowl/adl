import { suite, test } from '@testdeck/mocha';
import { deepEqual, equal } from 'assert';
import { resolve } from 'path';
import { TypeParameterDeclaration } from 'ts-morph';
import { ApiModel } from '../model/api-model';
import * as http from '../model/http';
import { Declaration, isReference } from '../model/typescript/reference';
import { assert } from '../support/assert';
import { UrlFileSystem } from '../support/file-system';

const scenarios = `${__dirname}/../../../test/scenarios/adl`;

@suite class TestNavigation {

  @test async 'Load and navigate ADL'() {
    const inputRoot = resolve(scenarios, 'sampleProject');
    const api = await new ApiModel(new UrlFileSystem(inputRoot)).load();

    this.navigateModels(api);
    this.navigateEnums(api);
    this.navigateOperations(api);
    this.navigateResponseCollections(api);
  }

  private navigateOperations(api: ApiModel) {
    const groups = <Array<http.OperationGroup>>api.operationGroups;
    deepEqual(groups.map(each => each.name), ['myOperations']);

    const operations = groups[0].operations;
    deepEqual(operations.map(each => each.name), ['first', 'second', 'third', 'fourth']);

    const first = operations[0];
    const firstResponses = first.responseCollection;
    assert(firstResponses !== undefined);
    assert(!isReference(firstResponses));
    equal(firstResponses.responses.length, 1);
    const firstRepsonse = firstResponses.responses[0];
    assert(!isReference(firstRepsonse));
    deepEqual(firstRepsonse.criteria.codes, [200]);
    deepEqual(firstRepsonse.criteria.mediaTypes, []);

    const firstResult = firstRepsonse.result;
    assert(!isReference(firstResult));
    equal(firstResult?.body?.declaration?.text, 'Person');

    const second = operations[1];
    const secondResponses = second.responseCollection;
    assert(secondResponses !== undefined);
    assert(isReference(secondResponses));
    equal(secondResponses.typeName, 'responseCollection1');
    equal(secondResponses.target.responses.length, 7);

    const third = operations[2];
    const thirdResponses = third.responseCollection;
    assert(thirdResponses !== undefined);
    assert(isReference(thirdResponses));
    equal(thirdResponses.typeName, 'responseCollection2');
    equal(thirdResponses.target.responses.length, 2);

    const fourth = operations[3];
    const fourthResponses = fourth.responseCollection;
    assert(fourthResponses === undefined);
  }

  private navigateResponseCollections(api: ApiModel) {
    const responseCollections = <Array<Declaration<http.ResponseCollection>>>api.responseCollections;
    equal(responseCollections.length, 2);

    const firstResponses = responseCollections[0].definition;
    equal(firstResponses.responses.length, 7);

    const firstResponsesExpected = [
      { codes: [400, 500], mediaTypes: ['application/json'], isException: true, },
      { codes: [404, 400], isException: true },
      { codes: [200], body: 'Person', isException: false },
      { codes: ['<c>'], mediaTypes: ['<m>'], body: 'Person', isException: true, message: 'some message', headers: ['header1'] },
      { codes: [500], isException: true },
      { codes: [201], body: 'Person', isException: false },
      { codes: [202], body: 'Person', isException: false },
    ];

    deepEqual(this.flattenAndDescribeResponses(firstResponses), firstResponsesExpected);
    const secondResponses = responseCollections[1].definition;
    equal(secondResponses.responses.length, 2);
    const secondResponsesExpected = [
      ...firstResponsesExpected,
      { codes: [501], isException: true }
    ];

    deepEqual(this.flattenAndDescribeResponses(secondResponses), secondResponsesExpected);
  }

  private flattenAndDescribeResponses(reponseCollection: http.ResponseCollection) {
    return this.flattenResponseCollection(reponseCollection).map(r => this.describeResponse(r));
  }

  private describeResponse(response: http.Response) {
    const stringifyTypeParameter = (v: string | number | boolean | undefined | TypeParameterDeclaration) =>
      v === undefined || typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' ?
        v : `<${v.getName()}>`;

    const stringifyTypeParameters = (input: Array<string | number | TypeParameterDeclaration>) =>
      input.map(v => stringifyTypeParameter(v));

    const result = isReference(response.result) ? response.result.target : response.result;

    const description: any = {
      codes: stringifyTypeParameters(response.criteria.codes),
      mediaTypes: stringifyTypeParameters(response.criteria.mediaTypes),
      body: result.body?.declaration?.text,
      isException: stringifyTypeParameter(result.isException),
      message: stringifyTypeParameter(result.message),
      headers: result.headers.map(t => t.declaration.text),
    };

    for (const key in description) {
      const value = description[key];
      if (value === undefined || value.length === 0) {
        delete description[key];
      }
    }

    return description;
  }

  private flattenResponseCollection(collection: http.ResponseCollection): Array<http.Response> {
    const result = new Array<http.Response>();
    const impl = (col: http.ResponseCollection) => {
      for (const each of col.responses) {
        const response = isReference(each) ? each.target : each;
        if (response instanceof http.ResponseCollection) {
          impl(response);
        } else {
          result.push(response);
        }
      }
    };
    impl(collection);
    return result;
  }

  private navigateModels(api: ApiModel) {
    const modelTypeNames = api.modelTypes.map(each => each.name);
    deepEqual(modelTypeNames, ['Person']);

    const personModel = api.modelTypes[0];
    equal(personModel.name, 'Person');

    const properties = personModel.properties;
    const propertyNames = properties.map(each => each.name);
    deepEqual(propertyNames, ['name', 'age']);

    const propertyTypes = properties.map(each => each.type.declaration.text);
    deepEqual(propertyTypes, ['string', 'number']);
  }

  private navigateEnums(api: ApiModel) {
    const enumNames = api.enumTypes.map(each => each.name);
    deepEqual(enumNames, ['Color', 'Priority']);

    const colorEnum = api.enumTypes[0];
    equal(colorEnum.name, 'Color');
    equal(colorEnum.summary, 'Represents a color');
    equal(colorEnum.extensible, true);

    const colorValueNames = colorEnum.values.map(each => each.name);
    deepEqual(colorValueNames, ['Red', 'Blue', 'None']);

    const colorValueSummaries = colorEnum.values.map(each => each.summary);
    deepEqual(colorValueSummaries, ['The color red', 'The color blue', 'No color']);

    const colorValues = colorEnum.values.map(each => each.value);
    deepEqual(colorValues, ['Red', 'Blue', '']);

    const priorityEnum = api.enumTypes[1];
    equal(priorityEnum.name, 'Priority');
    equal(priorityEnum.summary, '');
    equal(priorityEnum.extensible, false);

    const priorityValueSummaries = priorityEnum.values.map(each => each.summary);
    deepEqual(priorityValueSummaries, ['', '', '']);

    const priorityValues = priorityEnum.values.map(each => each.value);
    deepEqual(priorityValues, [0, 1, 2]);
  }
}
import { suite, test } from '@testdeck/mocha';
import { deepEqual, equal } from 'assert';
import { resolve } from 'path';
import { ApiModel } from '../model/api-model';
import { ResponseCollection } from '../model/http/operation';
import { isDeclaration } from '../model/typescript/reference';

const scenarios = `${__dirname}/../../../test/scenarios/adl`;

@suite class TestNavigation {

  @test async 'Load and navigate ADL'() { 
    const inputRoot = resolve(scenarios, 'sampleProject');
    const api = await ApiModel.loadADL(inputRoot);

    this.navigateModels(api);
    this.navigateEnums(api);
    this.navigateOperations(api);
  }

  private navigateOperations(api: ApiModel) {
    const groups = api.operationGroups;

    deepEqual(groups.map(each => each.name), ['myOperations']);

    const operations = groups[0].operations;

    deepEqual(operations.map(each => each.name), ['first']);

    this.navigateResponses(api);
  }

  private navigateResponses(api: ApiModel) {
    const responseCollections = api.responseCollections;
    deepEqual(responseCollections.length, 1, 'should have one response collection');

    const col = responseCollections[0];

    // strongly type the expected collections type
    const collection = <ResponseCollection>col.target;
    const responses = collection.responses;

    deepEqual(responses.length, 6, 'should have 6 responses in the collection');

    for (const response of responses) {
      const r = isDeclaration(response) ? response.target : response;
      const c = r.criteria;
      let discard = c.codes; // will throw if it's not good
      discard = c.mediaTypes; // will throw if it's not good
      const s = r.result;
      if (s) {
        const result = isDeclaration(s) ? s.target : s;
        const discard = result.body?.declaration.text;
      }
    }
  }

  private navigateModels(api: ApiModel) {
    const modelTypeNames = api.modelTypes.map(each => each.name);
    deepEqual(modelTypeNames, ['Person', 'responseValue2']);

    const personModel = api.modelTypes[0];
    equal(personModel.name, 'Person');

    const properties = personModel.properties;
    const propertyNames = properties.map(each => each.name);
    deepEqual(propertyNames, [ 'name', 'age' ]);

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
import { suite, test } from '@testdeck/mocha';
import { deepEqual, equal } from 'assert';
import { resolve } from 'path';
import { ApiModel } from '../model/api-model';
import { isReference, Declaration } from '../model/typescript/reference';
import { ResponseCollection } from '../model/http/operation';
import { UrlFileSystem } from '../support/file-system';

const scenarios = `${__dirname}/../../../test/scenarios/adl`;

@suite class TestNavigation {

  @test async 'Load and navigate ADL'() { 
    const inputRoot = resolve(scenarios, 'sampleProject');
    const api = await new ApiModel(new UrlFileSystem(inputRoot)).load();

    this.navigateModels(api);
    this.navigateEnums(api);
    this.navigateOperations(api);
  }

  private navigateOperations(api: ApiModel) {
    const groups = api.operationGroups;

    deepEqual(groups.map(each => each.name), ['myOperations']);

    const operations = groups[0].operations;

    deepEqual(operations.map(each => each.name), ['first']);

    const t = operations[0].node.getReturnType();
    const s = t.getText();

    this.navigateResponses(api);
  }

  private navigateResponses(api: ApiModel) {
    const responseCollections = api.responseCollections;
    deepEqual(responseCollections.length, 1);

    
    const col = responseCollections[0];
    this.navigateResponseCollection(<ResponseCollection>col.definition);
    const collection = col.definition;
    const responses = collection.responses;

    deepEqual(responses.length, 7);
  }

  private navigateResponseCollection(collection: ResponseCollection) {
    for (const each of collection.responses) {
      const responseOrResponseCollection = isReference(each) ? each.target : each;
      if (responseOrResponseCollection instanceof ResponseCollection) {
        this.navigateResponseCollection(collection);
        continue;
      } 
      const response = responseOrResponseCollection;
      const criteria = response.criteria;
      let discard = criteria.codes; // will throw if it's not good
      discard = criteria.mediaTypes; // will throw if it's not good
      let result = response.result;
      if (result) {
        result = isReference(result) ? result.target : result;
        const discard = result.body?.declaration.text;
      }
    }
  }

  private navigateModels(api: ApiModel) {
    const modelTypeNames = api.modelTypes.map(each => each.name);
    deepEqual(modelTypeNames, ['Person']);

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
import { suite, test } from '@testdeck/mocha';
import { deepEqual } from 'assert';
import { resolve } from 'path';
import { ApiModel } from '../model/api-model';

const scenarios = `${__dirname}/../../../test/scenarios/adl`;


@suite class TestNavigation {

  @test async first() { 
    const inputRoot = resolve(scenarios, 'sampleProject');
    const api = await ApiModel.loadADL(inputRoot);

    const models = api.modelTypes.map( each => each.name );
    deepEqual( models, ['Person']);

    const groups = api.operationGroups;
    
    deepEqual(groups.map(each => each.name), ['myOperations']);

    const operations = groups[0].operations;
    
    deepEqual(operations.map(each => each.name), ['first']);

  }
 
}
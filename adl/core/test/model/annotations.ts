import { suite, test } from '@testdeck/mocha';
import { deepEqual } from 'assert';
import { resolve } from 'path';
import { ApiModel } from '../../model/api-model';

const scenarios = `${__dirname}/../../../../test/scenarios/adl`;

@suite class TestAnnotations {

  @test async first() { 
    const inputRoot = resolve(scenarios, 'sampleProject');
    const api = await ApiModel.loadADL(inputRoot);

    const groups = api.operationGroups;
    const a = groups[0].annotations;
    if( !a ) {
      throw new Error('Should return group');
    }

    deepEqual(a.names, ['param', 'happy', 'since'] );

    const ann = a.annotations;
    deepEqual(ann[0].name, 'param' );
    deepEqual(ann[0].identity, 'paramname');
    deepEqual(ann[0].content, 'comment text');
  }

}
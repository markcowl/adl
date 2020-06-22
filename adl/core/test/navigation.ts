import { suite, test } from '@testdeck/mocha';
import { deepEqual } from 'assert';
import { resolve } from 'path';
import { ApiModel } from '../model/api-model';
import { ResponseCollection } from '../model/http/operation';
import { isDeclaration } from '../model/typescript/reference';

const scenarios = `${__dirname}/../../../test/scenarios/adl`;

@suite class TestNavigation {

  @test async first() { 
    const inputRoot = resolve(scenarios, 'sampleProject');
    const api = await ApiModel.loadADL(inputRoot);

    const models = api.modelTypes.map( each => each.name );
    deepEqual(models, ['Person', 'responseValue2']);

    const groups = api.operationGroups;
    
    deepEqual(groups.map(each => each.name), ['myOperations']);

    const operations = groups[0].operations;
    
    deepEqual(operations.map(each => each.name), ['first']);

    const responseCollections =  api.responseCollections;
    deepEqual(responseCollections.length, 1, 'should have one response collection');
    
    const col = responseCollections[0];

    // strongly type the expected collections type
    const collection = <ResponseCollection> col.target;
    const responses = collection.responses;

    deepEqual(responses.length, 7, 'should have 6 responses in the collection');

    for( const response of responses ) {
      const r = isDeclaration( response ) ? response.target : response;
      const c = r.criteria;
      let discard =  c.codes; // will throw if it's not good
      discard = c.mediaTypes; // will throw if it's not good
      //console.log(  c.codes.join(',') );
      // console.log( c.mediaTypes.join(',') );
      const s = r.result;
      if( s ) {
        const result = isDeclaration(s) ? s.target : s;
        //console.log( result.body?.declaration.text || 'No Body Present' ) ;
        const discard = result.body?.declaration.text; // will throw if it's not good
      }
    } 


  }
 
}
import { describe } from 'mocha';
import { ApiModel } from '../model/api-model';

require('source-map-support').install();


const scenario = `${__dirname}/../../../test/scenarios/adl/linter`;

describe('Test Linter', () => {
  const root = `${scenario}`;
  // const folders = linq.values(readdirSync(root)).where(each => statSync(`${root}/${each}`).isDirectory()).toArray();

  // for (const folder of folders) {
    

  it('Loads/lints sample project', async () => {
    const api = await ApiModel.loadADL(scenario);
    for( const result of api.linter.run() ) {
      // whatever checks you expect
      console.log( result.message);
    } 

    // const q = api.modelTypes;
    // const linter = new Linter();
    // const results = linter.run(api);
    // for (const result of results) {
    //   console.log(result);
    // }

    // notEqual(q.length, 0, 'Should have models');
    // console.log(`has ${q.length} models`);
  });
  // }
});


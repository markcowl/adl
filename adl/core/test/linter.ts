import { linq } from '@azure-tools/linq';
import { readdirSync, statSync } from 'fs';
import { describe } from 'mocha';
import { resolve } from 'path';

require('source-map-support').install();


const scenarios = `${__dirname}/../../../test/scenarios/adl/linter`;

describe('Test Linter', () => {
  const root = `${scenarios}`;
  const folders = linq.values(readdirSync(root)).where(each => statSync(`${root}/${each}`).isDirectory()).toArray();

  for (const folder of folders) {
    const inputRoot = resolve(root, folder);

    it(`Processes '${folder}'`, async () => {
      // const api = await ApiModel.loadADL(inputRoot);
      // const q = api.modelTypes;
      // const linter = new Linter();
      // const results = linter.run(api);
      // for (const result of results) {
      //   console.log(result);
      // }

      // notEqual(q.length, 0, 'Should have models');
      // console.log(`has ${q.length} models`);
    });
  }
});


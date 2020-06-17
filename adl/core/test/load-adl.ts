import { linq } from '@azure-tools/linq';
import { notEqual } from 'assert';
import { readdirSync, statSync } from 'fs';
import { describe } from 'mocha';
import { resolve } from 'path';
import { ApiModel } from '../model/api-model';

require('source-map-support').install();


const scenarios = `${__dirname}/../../../test/scenarios/adl`;

describe('Load ADL Projects', () => {
  const root = `${scenarios}`;
  const folders = linq.values(readdirSync(root)).where(each => statSync(`${root}/${each}`).isDirectory()).toArray();

  for (const folder of folders) {
    const inputRoot = resolve(root, folder);
    
    it(`Processes '${folder}'`, async () => {
      const api = await ApiModel.loadADL(inputRoot);
      const q = api.modelTypes;
      notEqual( q.length, 0 , 'Should have models');
      console.log(`has ${q.length} models`);
    });
  }
});


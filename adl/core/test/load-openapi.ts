import { describe, it } from 'mocha';
import { writeFile, readdir, isFile } from '@azure-tools/async-io';
import { values } from '@azure-tools/linq';
import { FileSystem, UrlFileSystem } from '../support/file-system';
import { deserializeOpenAPI3 } from '../serialization/openapiv3/serializer';
import { serialize } from './serialization';
import { readdirSync, unlinkSync, statSync } from 'fs';
import { resolve } from 'path';
import { equal } from 'assert';
import * as chalk from 'chalk';
import { v3 } from '@azure-tools/openapi';

require('source-map-support').Install;

const $scenarios = `${__dirname}/../../test/scenarios/v3/single/input`;


describe('Load Single OAI3 files', () => {
  const files = values(readdirSync($scenarios)).where(each => statSync(`${$scenarios}/${each}`).isFile() && !each.endsWith('.api.yaml')).toArray();
  let fs: FileSystem;

  before('create testing filesystem', async () => {

    fs = new UrlFileSystem(`${$scenarios}/`);
  });

  for (const file of files) {
    it(`Processes '${file}'`, async () => {
      console.log(chalk.gray(`\n      starting ${file}`));
      const start = process.uptime() * 1000;
      const api = await deserializeOpenAPI3(fs, file);

      const end = process.uptime() * 1000;
      console.log(chalk.gray(`      ${file} Deserialization ${chalk.yellow(Math.floor(end - start))} ms`));

      const outputPath = resolve(`${$scenarios}/../output/${file.replace(/.yaml$/ig, '.api.yaml')}`);
      const atticPath = resolve(`${$scenarios}/../output/${file.replace(/.yaml$/ig, '.attic.yaml')}`);



      if (await isFile(outputPath)) {
        unlinkSync(outputPath);
      }

      if (api.attic) {
        const attic = <v3.Model>api.attic.valueOf();

        // verify that the attic does not have things we expect to be done
        equal(attic.info, undefined, 'Should not have an info section left in attic');
        equal(attic.openapi, undefined, 'Should not have an openapi section left in attic');

        await writeFile(atticPath, serialize(api.attic.valueOf()));
        delete api.attic;
      }

      await writeFile(outputPath, serialize(api.valueOf()));

      equal(await isFile(outputPath), true, `Should write file ${outputPath} `);
    });
  }

});
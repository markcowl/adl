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
import { check } from '../model/api-model';

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

      const output = resolve(`${$scenarios}/../output/${file.replace(/.yaml$/ig, '.api.yaml')}`);

      if (await isFile(output)) {
        unlinkSync(output);
      }
      await writeFile(output, serialize(api));
      check(api);
      equal(await isFile(output), true, `Should write file ${output} `);
    });
  }

});
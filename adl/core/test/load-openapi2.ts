import { isFile, writeFile } from '@azure-tools/async-io';
import { values } from '@azure-tools/linq';
import { v2 } from '@azure-tools/openapi';
import { equal, fail } from 'assert';
import * as chalk from 'chalk';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { describe, it } from 'mocha';
import { resolve } from 'path';
import { deserializeOpenAPI2 } from '../serialization/openapi/v2/serializer';
import { Stopwatch } from '../support/stopwatch';
import { createHost, formatDuration } from './common';
import { Errors as AccumulateErrors } from './errors';
import { serialize } from './serialization';

require('source-map-support').Install;

const scenarios = `${__dirname}/../../test/scenarios/v2`;

describe('Load Single OAI2 files', () => {
  const inputRoot = `${scenarios}/single/input`;
  const outputRoot = `${scenarios}/single/output`;
  const files = values(readdirSync(inputRoot)).where(each => statSync(`${inputRoot}/${each}`).isFile()).toArray();

  for (const file of files) {
    it(`Processes '${file}'`, async () => {
      const host = createHost(inputRoot);
      const api = await deserializeOpenAPI2(host, file);

      const apiOutput = resolve(`${outputRoot}/${file.replace(/.yaml$/ig, '.api.yaml')}`);
      const atticOutput = resolve(`${outputRoot}/${file.replace(/.yaml$/ig, '.attic.yaml')}`);
      const errors = new AccumulateErrors();

      if (await isFile(apiOutput)) {
        unlinkSync(apiOutput);
      }

      if (await isFile(apiOutput)) {
        unlinkSync(atticOutput);
      }

      if (api.attic) {
        const attic = <v2.Model>api.attic.valueOf();

        // verify that the attic does not have things we expect to be done

        errors.check(() => equal(attic.swagger, undefined, 'Should not have an swagger node left in attic'));
        //errors.check(() => equal(attic.info, undefined, 'Should not have an info section left in attic'));
        //errors.check(() => equal(attic.tags, undefined, 'Should not have a tags section left in attic'));
        //errors.check(() => equal(attic.externalDocs, undefined, 'Should not have an externalDocs section left in attic'));

        await writeFile(atticOutput, serialize(api.attic.valueOf()));
        delete api.attic;
      }

      const stopwatch = new Stopwatch();
      await writeFile(apiOutput, serialize(api.valueOf()));
      console.log(chalk.cyan(`      serialize: '${file}' ${formatDuration(stopwatch.time)} `));
      equal(await isFile(apiOutput), true, `Should write file ${apiOutput} `);
      if (errors.count > 0) {
        fail(`Should not report errors: \n      ${errors.summary}\n`);
      }
    });
  }

});

describe('Load Multiple OAI2 files', () => {
  const root = `${scenarios}/multiple`;
  const folders = values(readdirSync(root)).where(each => statSync(`${root}/${each}`).isDirectory()).toArray();

  for (const folder of folders) {
    const inputRoot = resolve(root, folder, 'input');
    const outputRoot = resolve(`${inputRoot}/../output/`);

    it(`Processes '${inputRoot}'`, async () => {
      const host = createHost(inputRoot);

      const files = values(readdirSync(inputRoot)).where(each => statSync(`${inputRoot}/${each}`).isFile()).toArray();
      const api = await deserializeOpenAPI2(host, ...files);
      const apiOutput = resolve(`${outputRoot}/${folder}.yaml`);
      const atticOutput = resolve(`${outputRoot}/${folder}.attic.yaml`);

      const errors = new AccumulateErrors();

      if (await isFile(apiOutput)) {
        unlinkSync(apiOutput);
      }

      if (await isFile(apiOutput)) {
        unlinkSync(atticOutput);
      }

      if (api.attic) {
        const attic = <v2.Model>api.attic.valueOf();

        // verify that the attic does not have things we expect to be done

        errors.check(() => equal(attic.swagger, undefined, 'Should not have an swagger node left in attic'));
        //errors.check(() => equal(attic.info, undefined, 'Should not have an info section left in attic'));
        //errors.check(() => equal(attic.tags, undefined, 'Should not have a tags section left in attic'));
        //errors.check(() => equal(attic.externalDocs, undefined, 'Should not have an externalDocs section left in attic'));

        await writeFile(atticOutput, serialize(api.attic.valueOf()));
        delete api.attic;
      }

      const stopwatch = new Stopwatch();
      await writeFile(apiOutput, serialize(api.valueOf()));
      console.log(chalk.cyan(`      serialize: '${folder}' ${formatDuration(stopwatch.time)} `));
      equal(await isFile(apiOutput), true, `Should write file ${apiOutput} `);
      if (errors.count > 0) {
        fail(`Should not report errors: \n      ${errors.summary}\n`);
      }
    });
  }

});
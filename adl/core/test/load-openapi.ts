import { isFile, writeFile } from '@azure-tools/async-io';
import { values } from '@azure-tools/linq';
import { v3 } from '@azure-tools/openapi';
import { equal, fail } from 'assert';
import * as chalk from 'chalk';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { describe, it } from 'mocha';
import { resolve } from 'path';
import { deserializeOpenAPI3 } from '../serialization/openapi/v3/serializer';
import { FileSystem, UrlFileSystem, Host } from '../support/file-system';
import { serialize } from './serialization';
import { Errors as AccumulateErrors } from './errors';
import { Stopwatch } from '../support/stopwatch';

require('source-map-support').Install;

const $scenarios = `${__dirname}/../../test/scenarios/v3/single/input`;
function formatDuration(msec: number) {
  const s = (msec / 1000).toString();
  if (msec < 250) {
    return chalk.green(`${s}s`);
  }
  if (msec < 750) {
    return chalk.yellow(`${s}s`);
  }

  if (msec < 60000) {
    return chalk.red(`${(Math.floor(msec / 1000) % 60)}.${msec % 1000}s`);
  }

  return chalk.red(`${Math.floor(msec / 60000)}:${(Math.floor(msec / 1000) % 60).toString().padStart(2, '0')}.${msec % 1000}m`);
}

describe('Load Single OAI3 files', () => {
  const files = values(readdirSync($scenarios)).where(each => statSync(`${$scenarios}/${each}`).isFile() && !each.endsWith('.api.yaml')).toArray();
  let host: Host;

  before('create testing filesystem', async () => {
    host = new Host(new UrlFileSystem(`${$scenarios}/`));


    host.on('warning', (msg, node, when) => console.log(chalk.yellowBright(`      ${msg}`)));
    host.on('error', (msg, node, when) => console.log(chalk.redBright(`      ${msg}`)));
    host.on('loaded', (path, duration, when) => console.log(chalk.cyan(`      loaded: '${path}' ${formatDuration(duration)} `)));
    host.on('parsed', (path, duration, when) => console.log(chalk.cyan(`      parsed: '${path}' ${formatDuration(duration)} `)));
    host.on('attic', (path, duration, when) => console.log(chalk.cyan(`      attic: '${path}' ${formatDuration(duration)} `)));
    host.on('processed', (path, duration, when) => console.log(chalk.cyan(`      processed: '${path}' ${formatDuration(duration)} `)));

  });

  for (const file of files) {
    it(`Processes '${file}'`, async () => {
      console.log(chalk.gray(`\n      starting ${file}`));
      const stopwatch = new Stopwatch();

      const api = await deserializeOpenAPI3(host, file);
      const outputPath = resolve(`${$scenarios}/../output/${file.replace(/.yaml$/ig, '.api.yaml')}`);
      const atticPath = resolve(`${$scenarios}/../output/${file.replace(/.yaml$/ig, '.attic.yaml')}`);

      const errors = new AccumulateErrors();

      if (await isFile(outputPath)) {
        unlinkSync(outputPath);
      }

      if (await isFile(outputPath)) {
        unlinkSync(atticPath);
      }

      if (api.attic) {
        const attic = <v3.Model>api.attic.valueOf();

        // verify that the attic does not have things we expect to be done
        errors.check(() => equal(attic.info, undefined, 'Should not have an info section left in attic'));
        errors.check(() => equal(attic.openapi, undefined, 'Should not have an openapi section left in attic'));
        errors.check(() => equal(attic.tags, undefined, 'Should not have a tags section left in attic'));
        errors.check(() => equal(attic.externalDocs, undefined, 'Should not have an externalDocs section left in attic'));

        errors.check(() => equal(attic.components?.schemas, undefined, 'Should not have components/schemas section left in attic'));
        errors.check(() => equal(attic.components?.parameters, undefined, 'Should not have components/parameters section left in attic'));

        await writeFile(atticPath, serialize(api.attic.valueOf()));
        delete api.attic;
      }
      stopwatch.time;
      await writeFile(outputPath, serialize(api.valueOf()));
      console.log(chalk.cyan(`      serialize: '${file}' ${formatDuration(stopwatch.time)} `));
      equal(await isFile(outputPath), true, `Should write file ${outputPath} `);
      if (errors.count > 0) {
        fail(`Should not report errors: \n      ${errors.summary}\n`);
      }
    });
  }

});
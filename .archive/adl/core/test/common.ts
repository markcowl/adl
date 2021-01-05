import { isFile } from '@azure-tools/async-io';
import * as chalk from 'chalk';
import * as fs from 'fs';
import { ApiModel } from '../model/api-model';
const unlink = fs.promises.unlink;

export function formatDuration(msec: number) {
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

export function subscribeToMessages(api: ApiModel) {
  api.messages.on('warning', (msg, node, when) => console.log(chalk.yellowBright(`      ${msg}`)));
  api.messages.on('error', (msg, node, when) => console.log(chalk.redBright(`      ${msg}`)));
  api.messages.on('loaded', (path, duration, when) => console.log(chalk.cyan(`      loaded: '${path}' ${formatDuration(duration)} `)));
  api.messages.on('parsed', (path, duration, when) => console.log(chalk.cyan(`      parsed: '${path}' ${formatDuration(duration)} `)));
  api.messages.on('attic', (path, duration, when) => console.log(chalk.cyan(`      attic: '${path}' ${formatDuration(duration)} `)));
  api.messages.on('processed', (path, duration, when) => console.log(chalk.cyan(`      processed: '${path}' ${formatDuration(duration)} `)));
}

export function Delay(delayMS: number): Promise<void> {
  return new Promise<void>(res => setTimeout(res, delayMS));
}

export async function clean(...files: Array<string>) {
  await Promise.all(
    files.map(async (each) => {
      try {
        if (await isFile(each)) {
          await unlink(each);
        }
      } catch {
        // shh
      }
    }));
}
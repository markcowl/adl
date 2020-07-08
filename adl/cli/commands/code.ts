import { Messages } from '@azure-tools/adl.core';
import { mkdir, writeFile } from '@azure-tools/async-io';
import { tmpdir } from 'os';
import { join } from 'path';
import { CommandLine } from '../command-line';
import { execute } from '../support/process';
import { ReadUri } from '../support/uri';

export async function cmdCode(messages: Messages, args: CommandLine) {
  // download release from uri https://github.com/fearthecowboy/adl/releases/download/v001/adl-language-0.0.174.vsix
  const tmpFolder = `${tmpdir()}/install-adl`;
  await mkdir(tmpFolder);

  try {


    const force = args.switches.force ? ['--force'] : [];
    const cmd = args.switches.insiders ? 'code-insiders' : 'code';

    if (args.switches.remove) {
      const result = await execute(cmd, [
        '--uninstall-extension', 'ms-vscode.adl-language',
        ...force,
      ], {});
      if (result.stderr) {
        messages.error(result.stderr);
      } else {
        messages.log(result.stdout);
      }
    } else {
      const version = '0.0.174';
      const source = `https://github.com/fearthecowboy/adl/releases/download/${version}/adl-language-${version}.vsix`;
      messages.log(`Downloading ${source}`);

      const data = await ReadUri(source);
      const vsix = join(tmpFolder, `adl-language-${version}.vsix`);
      await writeFile(vsix,data);
      const result = await execute(cmd, [
        '--install-extension',vsix,
        ...force,

      ],{});
      if (result.stderr) {
        messages.error(result.stderr);
      } else {
        messages.log(result.stdout);
      }
    }

  }
  finally {
    // await rmdir(tmpFolder);
  }
}
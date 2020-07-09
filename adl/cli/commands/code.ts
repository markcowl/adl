import { Messages } from '@azure-tools/adl.core';
import { mkdir, rmdir, writeFile } from '@azure-tools/async-io';
import { tmpdir } from 'os';
import { join } from 'path';
import { CommandLine } from '../command-line';
import { execute } from '../support/process';
import { ReadUri } from '../support/uri';

export async function cmdCode(messages: Messages, args: CommandLine) {
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
      // download release from uri https://github.com/fearthecowboy/adl/releases/download/v001/adl-language-0.0.174.vsix
      // https://github.com/Azure/adl/releases/latest
      let version = args.switch('version', 'more than one  \'--version\' specified.');
      let source = '';

      if (!version) {
        const page = (await ReadUri('https://github.com/Azure/adl/releases/latest')).toString();
        source = page.replace(/[\s\S]*(\/Azure\/adl\/releases\/download\/.*?vsix)[\s\S]*/gm, 'https://github.com$1');
        version = source.replace(/[\s\S]*adl-language-(.*).vsix.*/, '$1');
      } else {
        source = `https://github.com/Azure/adl/releases/download/${version}/adl-language-${version}.vsix`;
      }

      if (!args.switches.force) {
        const result = await execute(cmd, [
          '--list-extensions',
          '--show-versions',
        ], {});
        if (result.stderr) {
          messages.error(result.stderr);
          return;
        } else {
          if (result.stdout.indexOf('adl-language') > -1) {
            const installed = result.stdout.replace(/[\s\S]*ms-vscode.adl-language@(.*$)[\s\S]*/gm, '$1');
            if (installed === version) {
              messages.log(`Latest version ${version} is already installed.`);
              return;
            }
          }
        }
      }


      messages.log(`Downloading version '${version}' (${source})`);

      const data = await ReadUri(source);

      const vsix = join(tmpFolder, `adl-language-${version}.vsix`);
      await writeFile(vsix, data);
      const result = await execute(cmd, [
        '--install-extension', vsix,
        ...force,

      ], {});
      if (result.stderr) {
        messages.error(result.stderr);
      } else {
        messages.log(result.stdout);
      }
    }

  }
  finally {
    await rmdir(tmpFolder);
  }
}
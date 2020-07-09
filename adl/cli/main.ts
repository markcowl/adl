#!/usr/bin/env node
/*
adl --input:https://.../foo.json  --save:./outputfolder --format:adl
adl

- can have more than one input file
- input files can $ref other files relative to their location
- $ref files that are not primary inputs are considered secondary, and will only get components that are $ref'd pulled thru (and polymorphic relations )

- everything that gets loaded from a swagger/openapi file gets tagged with it's metadata and versioninfo
- $refs are processed as they visited.

- need an Filesystem interface (load/enum/etc)
- globbing on cmdline?

- only anonymous components get automatically deduplicated (is this even possible?)
-


*/

import { Messages } from '@azure-tools/adl.core';
import * as chalk from 'chalk';
import * as marked from 'marked';
import { argv } from 'process';
import { parseArgs } from './command-line';
import { cmdCode } from './commands/code';
import { cmdImport } from './commands/import';
import { cmdInit } from './commands/init';
import { errorCount, subscribeToMessages } from './messages';

require('source-map-support').install();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerminalRenderer = require('marked-terminal');
const messages = subscribeToMessages(new Messages());

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer({
    showSectionPrefix: false,
    tab: 2,
    code: chalk.gray.bold,
    href: chalk.blueBright.underline,
    firstHeading: chalk.cyan.underline,
    codespan: (text: string, ...args: Array<any>) => chalk.white.bold(`${text}`, ...args),
  })
});

/**
 * Compiles markdown to HTML.
 *
 * @param src String of markdown source to be compiled
 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
 * @return compiled markdown text
 */
export function markdown(src: string, callback?: (error: any | undefined, parseResult: string) => void): string;

/**
 * Compiles markdown to HTML.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options
 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
 * @return compiled markdown text
 */
export function markdown(src: string, options?: marked.MarkedOptions, callback?: (error: any | undefined, parseResult: string) => void): string;

export function markdown(src: string, options?: any, callback?: any): string {
  src = src.replace(/'/g, '`');
  return marked(src, options, callback).trim();
}


export const color = chalk;

const args = argv.slice(2);

function help() {
  messages.log(`
## Usage: 
  'adl init' initialize the project folder with a new ADL project.

  'adl import <...filename.yaml|json>' import OpenAPI into an ADL project.
    '--from:<folder|URI>' the base folder to import files from (input files are relative from that location)

  'adl code' install latest vscode extension for ADL from github.
    '--remove' removes the vscode extension 
    '--insiders' operate on the vscode insiders build instead
    '--force' force install/overwrite of the extension 
    '--version:<#.#.#>' install specific version of the extension
  

## Common Switches:
  '--project:<folder>' the ADL project folder to work with (defaults to the current folder)
   

`);
}
// temporarily disable
// 'adl merge <...projectfolder>' -- import OpenAPI into an ADL model.

function version() {
  return require(`${__dirname}/../package.json`).version;
}

function header() {
  messages.log('');
  messages.log(`## ADL command line utility [version: ${chalk.white.bold(version())}; node: ${chalk.white.bold(process.version)}; max-memory: ${chalk.white.bold(Math.round((require('v8').getHeapStatistics().heap_size_limit) / (1024 * 1024)) & 0xffffffff00)} gb]`);
  messages.log(chalk.white.bold('(C) 2020 Microsoft Corporation.'));
  messages.log('https://github.com/azure/adl');
  messages.log('');
}

async function main() {
  const command = args.shift();
  const commandLine = parseArgs(args);
  header();

  try {
    switch (command) {
      case '--help':
      case 'help':
        return help();

      case 'init':
        return await cmdInit(messages, commandLine);

      case 'code':
        return await cmdCode(messages, commandLine);

      case 'import':
        return await cmdImport(messages, commandLine);

        // temporarily disable
        // case 'merge':
        //  return cmdMerge(messages,commandLine);

      default:
        if (command) {
          return messages.error(`Unknown command '${command}'\nUse--help for more information`);
        }

        return messages.error('No command given.\nUse --help for more information.');
    }

  } catch (error) {
    messages.error(error.message || error);

    if (error.stack) {
      messages.log(error.stack);
    }
  }
  finally {
    process.exit(errorCount);
  }
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
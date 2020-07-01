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

import * as marked from 'marked';
import { argv } from 'process';
import { parseArgs } from './command-line';
import { cmdImport } from './commands/import';

require('source-map-support').install();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer({
    showSectionPrefix: false,
    tab: 2,

  })
});


export const markdown = marked;

const args = argv.slice(2);

function help() {
  console.log(marked(`
# ADL Command line tool.

## Usage: 
  \`adl import <...filename.yaml|json>\` -- import OpenAPI into an ADL model.
  

## Switches:
  \`--project:<folder> \` -- the ADL project folder to work with (defaults to the current folder)
  \`--from:<folder|URI> \` -- the base folder to import files from (input files are relative from that location)

`));
}
// temporarily disable
// \`adl merge <...projectfolder>\` -- import OpenAPI into an ADL model.

async function main() {
  const command = args.shift();
  const commandLine = parseArgs(args);
  switch (command) {
    case '--help':
    case 'help':
      return help();

    case 'import':
      return cmdImport(commandLine);

      // temporarily disable
      // case 'merge':
      //  return cmdMerge(commandLine);

    default:
      return console.log('No command given. Use --help for more information.');
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
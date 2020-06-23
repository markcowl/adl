import { length } from '@azure-tools/linq';
import { resolve } from 'path';
import { cwd } from 'process';

export type switches = {
  [key: string]: Array<string>;
}

function onlyOne(values: Array<string>, errorMessage: string ) {
  switch( values.length ) {
    case 0: 
      return undefined;
    case 1: 
      return values[0];
  }
  throw new Error(errorMessage);
  
}

export class CommandLine {
  inputs = new Array<string>();
  switches: switches = {};
  
  #project!: string;
  get project() {
    return this.#project || (this.#project = resolve(cwd(), onlyOne(this.switches.project, 'multiple values specified for `--project`') ?? cwd()));
  }

  #inputFolder!: string;
  get inputFolder() { 
    return this.#inputFolder || (this.#inputFolder = onlyOne(this.switches.from, 'multiple values specified for `--from`') ?? cwd() );
  }

  get force() {
    return !!this.switches.force;
  }

  get inputPaths() {
    if( length(this.inputs) == 0 ) {
      throw new Error('No input paths specified.');
    }
    return this.inputs;
  }
}


export function parseArgs(args: Array<string>) {
  const cli = new CommandLine();

  for (const each of args) {
    const [, name, value] = /^--([^=:]+)[=:]?(.+)?$/g.exec(each) || [];
    if (name) {
      cli.switches[name] = cli.switches[name] === undefined ? [] : cli.switches[name];
      cli.switches[name].push(value);
      continue;
    }
    cli.inputs.push(each);
  }
  return cli;
}
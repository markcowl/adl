import { importModel } from '@azure-tools/adl.core/dist/support/visitor';
import { isDirectory } from '@azure-tools/async-io';
import { CommandLine } from '../command-line';
import { createHost } from '../host';

export async function cmdImport(args: CommandLine) {
  console.log(`Import: ${args.inputs.join(',')} : 
    project: ${args.project}
  `);
  
  const host = createHost(args.inputFolder, '');
  const api =  await importModel(host, ...args.inputPaths);

  if( await isDirectory(args.project) && !args.force ) {
    throw new Error(`Project folder '${args.project}' is not empty. Use --force to overwrite output`);
  }

  api.saveADL(args.project, true);
}
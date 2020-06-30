import { ApiModel, UrlFileSystem } from '@azure-tools/adl.core';
import { isDirectory } from '@azure-tools/async-io';
import { CommandLine } from '../command-line';
import { subscribeToMessages } from '../messages';

export async function cmdImport(args: CommandLine) {
  console.log(`Import: ${args.inputs.join(',')} : 
    project: ${args.project}
  `);

  const api = new ApiModel(new UrlFileSystem(args.project));
  subscribeToMessages(api);
  await api.importModel(new UrlFileSystem(args.inputFolder), ...args.inputPaths);

  if (await isDirectory(args.project) && !args.force) {
    throw new Error(`Project folder '${args.project}' is not empty. Use --force to overwrite output`);
  }

  await api.saveADL(true);
}
import { ApiModel, Messages, UrlFileSystem } from '@azure-tools/adl.core';
import { isDirectory, isFile } from '@azure-tools/async-io';
import { join } from 'path';
import { CommandLine } from '../command-line';
import { subscribeToMessages } from '../messages';
import { cmdInit } from './init';

export async function cmdImport(messages: Messages, args: CommandLine) {
  const projectfile = join(args.project, 'api.yaml');

  if (!await isDirectory(args.project) || !await isFile(projectfile)) {
    // when there is no project init one first.
    cmdInit(messages, args);
  }

  const api = new ApiModel(new UrlFileSystem(args.project));
  subscribeToMessages(api.messages);
  await api.load();

  await api.importModel(new UrlFileSystem(args.inputFolder), ...args.inputPaths);


  await api.saveADL(true);
}
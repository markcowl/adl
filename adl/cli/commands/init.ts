import { ApiModel, Messages, UrlFileSystem } from '@azure-tools/adl.core';
import { isDirectory, isFile } from '@azure-tools/async-io';
import { join } from 'path';
import { CommandLine } from '../command-line';
import { subscribeToMessages } from '../messages';

export async function cmdInit(messages: Messages, args: CommandLine) {

  if (await isDirectory(args.project)) {
    const projectfile = join(args.project, 'api.yaml');
    if (await isFile(projectfile)) {
      return messages.error(`Project folder '${args.project}' contains an ADL project`);
    }
  }

  const api = new ApiModel(new UrlFileSystem(args.project));
  subscribeToMessages(api.messages);

  await api.saveADL(true);
  messages.log(`Creating ADL at '${args.project}'`);
}
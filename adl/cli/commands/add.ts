import { ApiModel, Messages, UrlFileSystem } from '@azure-tools/adl.core';
import { isDirectory, isFile } from '@azure-tools/async-io';
import { join, resolve } from 'path';
import { pathToFileURL } from 'url';
import { CommandLine } from '../command-line';
import { subscribeToMessages } from '../messages';

export async function cmdAdd(messages: Messages, args: CommandLine) {
  if (await isDirectory(args.project)) {
    const projectfile = join(args.project, 'api.yaml');
    if (! await isFile(projectfile)) {
      return messages.error('Project folder does not contain an ADL project.');
    }
  }

  const p = args.switches.pkg;
  if (!p) {
    return messages.error('No packages specified (`--pkg:XXX`).');
  }

  const api = new ApiModel(new UrlFileSystem(args.project));
  subscribeToMessages(api.messages);
  await api.load();

  try {
    for (const pkg of p) {
      const path = resolve(process.cwd(), pkg);
      if (await isDirectory(path) || await isFile(path)) {
        if (await api.addUse(pathToFileURL(path).toString())) {
          messages.log(`Added local package reference to '${pkg}'`);
        } else {
          messages.log(`Package reference '${pkg}' already in project.`);
        }
      } else {
        if (await api.addUse(pkg)) {
          messages.log(`Added package reference to '${pkg}'`);
        } else {
          messages.log(`Package reference '${pkg}' already in project.`);
        }
      }
    }
  } catch (e) {
    messages.error(e.message);
    return messages.error('Failed adding package (aborting)');
  }

  await api.saveConfig();
  messages.log('Updated `api.yaml` configuration saved.');
}
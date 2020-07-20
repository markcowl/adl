import { ApiModel, Messages, UrlFileSystem } from '@azure-tools/adl.core';
import { Activation } from '@azure-tools/adl.core/dist/eventing/activation';
import { isDirectory, isFile } from '@azure-tools/async-io';
import { join } from 'path';
import { CommandLine } from '../command-line';
import { subscribeToMessages } from '../messages';

export async function cmdLint(messages: Messages, args: CommandLine) {
  if (await isDirectory(args.project)) {
    const projectfile = join(args.project, 'api.yaml');
    if (! await isFile(projectfile)) {
      return messages.error('Project folder does not contain an ADL project.');
    }
  }

  const api = new ApiModel(new UrlFileSystem(args.project));
  subscribeToMessages(api.messages);
  await api.load();
  const results = [...api.linter.run(Activation.edit)];
  for (const result of results) {
    messages.log(`${result.message} ${result.source && result.code ? `${result.source}(${result.code})`:''}`);
  }

  const fix = args.switches.fix;
  let fixesApplied = false;
  if (fix) {
    messages.log('Running fixes...');
    for (const result of results) {
      if (result.suggestions && result.suggestions.length > 0) {
        messages.log(`Applied Fix:${result.suggestions[0].description}`);
        result.suggestions[0].fix();
        fixesApplied = true;
      }
    }
  }

  const fixTypes = args.switches['fix-type'];
  if (fixTypes) {
    messages.log('Running fixes...');
    for (const result of results) {
      if (result.suggestions) {
        for (const type of fixTypes) {
          result.suggestions.find(x => x.categories?.includes(type))?.fix();
          fixesApplied = true;
        }
      }
    }
  }

  if (fixesApplied) {
    await api.saveADL();
  }
}
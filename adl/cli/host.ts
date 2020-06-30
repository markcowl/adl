import { ApiModel } from '@azure-tools/adl.core';
import { markdown } from './main';

export function subscribeToMessages(apiModel: ApiModel) {
  const host = apiModel.messages;

  host.on('error', (text: string) => {
    console.error(markdown(text));
  });

  host.on('warning', (text: string) => {
    console.log(markdown(text));
  });

  host.on('processed', (file: string, msec: number) => {
    console.log(markdown(`_Processed '${file}' in ${msec}_`));
  });
}
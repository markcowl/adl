import { ApiModel } from '@azure-tools/adl.core';
import { markdown } from './main';

export function subscribeToMessages(apiModel: ApiModel) {
  apiModel.messages.on('error', (text: string) => {
    console.error(markdown(text));
  });

  apiModel.messages.on('warning', (text: string) => {
    console.log(markdown(text));
  });

  apiModel.messages.on('processed', (file: string, msec: number) => {
    console.log(markdown(`_Processed '${file}' in ${msec}_`));
  });
}
import { Messages } from '@azure-tools/adl.core';
import { color, markdown } from './main';

export let errorCount = 0;

export function subscribeToMessages(messages: Messages) {

  messages.on('error', (text: string) => {
    errorCount++;
    console.error(`${color.redBright('error:')} ${markdown(text)}`);
  });

  messages.on('warning', (text: string) => {
    console.error(`${color.yellowBright('warning:')} ${markdown(text)}`);
  });

  messages.on('log', (text: string) => {
    console.log(markdown(text));
  });

  return messages;
}
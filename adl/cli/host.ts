import { Host, UrlFileSystem } from '@azure-tools/adl.core';
import { markdown } from './main';

export function createHost(sourceFolder: string, projectFolder: string) {
  const host =  new Host(new UrlFileSystem(sourceFolder));

  host.on('error', (text: string)=> {
    console.error(markdown(text));
  });

  host.on('warning', (text: string) => {
    console.log(markdown(text));
  });

  host.on('processed', (file: string, msec: number) => {
    console.log(markdown(`_Processed '${file}' in ${msec}_`));
  });

  return host;
}
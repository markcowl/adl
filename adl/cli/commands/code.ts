import { ApiModel, Messages, UrlFileSystem } from '@azure-tools/adl.core';
import { isDirectory, isFile } from '@azure-tools/async-io';
import { join } from 'path';
import { CommandLine } from '../command-line';
import { subscribeToMessages } from '../messages';
import { cmdInit } from './init';

export async function cmdCode(messages: Messages, args: CommandLine) {
  
}
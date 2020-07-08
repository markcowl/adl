import { isFile } from '@azure-tools/async-io';
import { ChildProcess, spawn, SpawnOptions } from 'child_process';
import { delimiter, extname, isAbsolute, resolve } from 'path';

export interface MoreOptions extends SpawnOptions {
  onCreate?(cp: ChildProcess): void;
  onStdOutData?(chunk: any): void;
  onStdErrData?(chunk: any): void;
}


function getPathVariableName() {
  // windows calls it's path 'Path' usually, but this is not guaranteed.
  if (process.platform === 'win32') {
    let PATH = 'Path';
    Object.keys(process.env).forEach(function (e) {
      if (e.match(/^PATH$/i)) {
        PATH = e;
      }
    });
    return PATH;
  }
  return 'PATH';
}
async function realPathWithExtension(command: string): Promise<string | undefined> {
  const pathExt = (process.env.pathext || '.EXE').split(';');
  for (const each of pathExt) {
    const filename = `${command}${each}`;
    if (await isFile(filename)) {
      return filename;
    }
  }
  return undefined;
}

async function getFullPath(command: string, searchPath?: string): Promise<string | undefined> {
  command = command.replace(/"/g, '');
  const ext = extname(command);

  if (isAbsolute(command)) {
    // if the file has an extension, or we're not on win32, and this is an actual file, use it.
    if (ext || process.platform !== 'win32') {
      if (await isFile(command)) {
        return command;
      }
    }

    // if we're on windows, look for a file with an acceptable extension.
    if (process.platform === 'win32') {
      // try all the PATHEXT extensions to see if it is a recognized program
      const cmd = await realPathWithExtension(command);
      if (cmd) {
        return cmd;
      }
    }
    return undefined;
  }

  if (searchPath) {
    const folders = searchPath.split(delimiter);
    for (const each of folders) {
      const fullPath = await getFullPath(resolve(each, command));
      if (fullPath) {
        return fullPath;
      }
    }
  }

  return undefined;
}

export async function execute(command: string, cmdlineargs: Array<string>, options: MoreOptions): Promise<{ stdout: string; stderr: string; error: Error | null; code: number }> {
  command = await getFullPath(command, process.env[getPathVariableName()]) || command;

  return new Promise((r, j) => {
    const cp = spawn(command, cmdlineargs, { ...options, stdio: 'pipe' });
    if (options.onCreate) {
      options.onCreate(cp);
    }

    options.onStdOutData ? cp.stdout.on('data', options.onStdOutData) : cp;
    options.onStdErrData ? cp.stderr.on('data', options.onStdErrData) : cp;

    let err = '';
    let out = '';
    cp.stderr.on('data', (chunk) => {
      err += chunk;
    });
    cp.stdout.on('data', (chunk) => {
      out += chunk;
    });
    cp.on('close', (code, signal) => r({ stdout: out, stderr: err, error: code ? new Error('Process Failed.') : null, code }));
  });
}
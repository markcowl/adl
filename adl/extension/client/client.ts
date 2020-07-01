/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { isDirectory, isFile, readdir } from '@azure-tools/async-io';
import { FileUriToPath, ReadUri, ResolveUri, WriteString } from '@azure-tools/uri';
import * as path from 'path';
import { ExtensionContext, workspace } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';
import { IsDirectoryRequest, IsFileRequest, ReadDirectoryRequest, ReadFileRequest, WriteFileRequest } from '../server/requestTypes';


let client!: LanguageClient;
let cwd: string;

export function activate(context: ExtensionContext) {
  // The server is implemented in node
  const serverModule = context.asAbsolutePath(
    path.join('dist', 'server', 'server.js')
  );
  // The debug options for the server
  // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
  const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions
    }
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for plain text documents
    // warning: if you put a scheme in documentSelector, it won't work for new (untitled) files.
    
    documentSelector: [{ language: 'typescript' }],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
    }
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    'adl',
    'ADL Language Service',
    serverOptions,
    clientOptions
  );

  client.start();

  // Start the client. This will also launch the server
  client.onRequest(ReadFileRequest.type, async ({ pathOrRelativePath: uri }) => {
    const headers: { [key: string]: string } = {};

    // check for GitHub OAuth token
    if (getGithubAuthToken() && uri.startsWith('https://raw.githubusercontent.com')) {
      // console.log(`Used GitHub authentication token to request '${uri}'.`);
      headers.authorization = `Bearer ${getGithubAuthToken()}`;
    }

    return ReadUri(uri, headers);
  });

  client.onRequest(WriteFileRequest.type, async ({ relativePath, data }) => {
    relativePath = relativePath[0] === '/' ? `.${relativePath}` : relativePath;
    if (relativePath.indexOf(':') > -1) {
      throw new Error(`Relative paths may not contain ':' characters (${relativePath}) `);
    }
    if (cwd.startsWith('file:/')) {
      throw new Error('Writing only supported on projects loaded from file:// uris');
    }

    const fullPath = ResolveUri(cwd, relativePath);

    if (!fullPath.startsWith(cwd)) {
      throw new Error(`Path (${fullPath}) not inside the project folder (${cwd})`);
    }

    return WriteString(fullPath, data);
  });

  client.onRequest(IsDirectoryRequest.type, async ({ relativePath }) => {
    return await isDirectory(FileUriToPath(ResolveUri(cwd, relativePath)));
  });

  client.onRequest(IsFileRequest.type, async ({ relativePath }) => {
    return await isFile(FileUriToPath(ResolveUri(cwd, relativePath)));
  });

  client.onRequest(ReadDirectoryRequest.type, async ({ relativePath }) => {
    const uri = resolve(relativePath);
    if (uri.startsWith('file:/')) {
      const path = FileUriToPath(uri);
      return readdir(path);
    }
    // can't do remote filesystem readdir at the moment.
    return [];
  });
  
  cwd = client.clientOptions.workspaceFolder?.uri.fsPath || '';
  const hello = '';
}

function resolve(pathOrRelativePath: string): string {
  return ResolveUri(cwd, pathOrRelativePath);
}
function relative(absolutePath: string): string {
  return path.relative(cwd, absolutePath);
}

function getGithubAuthToken() {
  return process.env['github-auth-token'] || process.env['githubauthtoken'] || undefined;
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
// using static-link'd dependencies: 
let usingStaticLoader = false;
if (process.env['no-static-loader'] === undefined && require('fs').existsSync(`${__dirname}/../../dist/static-loader.js`)) {
  usingStaticLoader = true;
  require(`${__dirname}/../../dist/static-loader.js`).load(`${__dirname}/../../dist/static_modules.fs`);
}

import * as path from 'path';
import { TextDecoder, TextEncoder } from 'util';
import { ExtensionContext, FileType, Uri, workspace } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';
import { IsDirectoryRequest, IsFileRequest, ReadDirectoryRequest, ReadFileRequest, WriteFileRequest } from '../server/requestTypes';


declare global {
  interface ReadonlyArray<T> {
    /**
    * Returns the elements of an array that meet the condition specified in a callback function.
    * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
    */
    where<S extends T>(callbackfn: (value: T, index: number, array: Array<T>) => value is S): Array<S>;
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     */
    where(callbackfn: (value: T, index: number, array: Array<T>) => unknown): Array<T>;
    /**
    * Calls a defined callback function on each element of an array, and returns an array that contains the results.
    */
    select<U>(callbackfn: (value: T, index: number, array: Array<T>) => U): Array<U>;
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param callbackfn A function that accepts up to three arguments. The some method calls
     * the callbackfn function for each element in the array until the callbackfn returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    any(callbackfn: (value: T, index: number, array: Array<T>) => unknown, thisArg?: any): boolean;
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param callbackfn A function that accepts up to three arguments. The every method calls
     * the callbackfn function for each element in the array until the callbackfn returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    all(callbackfn: (value: T, index: number, array: Array<T>) => unknown, thisArg?: any): boolean;
    /**
       * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
       * @param start The zero-based location in the array from which to start removing elements.
       * @param deleteCount The number of elements to remove.
       * @param items Elements to insert into the array in place of the deleted elements.
       */
    insert(start: number, ...items: Array<T>): Array<T>;
    /**
      * Removes elements from an array returning the deleted elements.
      * @param start The zero-based location in the array from which to start removing elements.
      * @param deleteCount The number of elements to remove.
      */
    remove(start: number, deleteCount?: number): Array<T>;
    selectMany<U>(callbackfn: (value: T, index: number, array: Array<T>) => U): Array<U extends ReadonlyArray<infer InnerArr> ? InnerArr : U>;
    groupByMap<TKey, TValue>(keySelector: (each: T) => TKey, selector: (each: T) => TValue): Map<TKey, Array<TValue>>;
    groupBy<TValue>(keySelector: (each: T) => string, selector: (each: T) => TValue): {
      [s: string]: Array<TValue>;
    };
    readonly last: T | undefined;
    readonly first: T | undefined;
  }
}

let client: LanguageClient;
export async function activate(context: ExtensionContext) {
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
  
  // Start the client. This will also launch the server
  client.start();
  client.outputChannel.appendLine(`ADL Language Client started. [static-loader: ${usingStaticLoader}]`);

  await client.onReady();
  client.onRequest(ReadFileRequest.type, async ({ path }) => {
    try {
      return new TextDecoder().decode(await workspace.fs.readFile(Uri.parse( path)));
    } catch (exception) {
      client.error(exception);
    }
    
    return '';
  });

  client.onRequest(WriteFileRequest.type, async ({ path, data }) => {
    try {
      return workspace.fs.writeFile(Uri.parse( path), new TextEncoder().encode(data));
    } catch (exception) {
      client.error(exception);
    }
  });

  client.onRequest(IsDirectoryRequest.type, async ({ path }) => {
    try {
      const file = await workspace.fs.stat(Uri.parse( path));
      return file.type === FileType.Directory;
    } catch (exception) {
      client.error(exception);
    }

    return false;
  });

  client.onRequest(IsFileRequest.type, async ({ path }) => {
    try {
      const file = await workspace.fs.stat(Uri.parse(path));
      return file.type === FileType.File;
    } catch (exception) {
      client.error(exception);
    }
  
    return false;
  });

  client.onRequest(ReadDirectoryRequest.type, async ({ path }) => {
    try {
      return (await workspace.fs.readDirectory(Uri.parse( path))).map(f => f[0]); 
    } catch (exception) {
      client.error(exception);
    }

    return [];
  });
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}

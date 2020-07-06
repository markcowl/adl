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
import { ApiModel, LinterDiagnostic, RuleSeverity } from '@azure-tools/adl.core';
import { CompletionItem, CompletionItemKind, createConnection, Diagnostic, DiagnosticSeverity, DidChangeConfigurationNotification, InitializeParams, InitializeResult, ProposedFeatures, TextDocumentPositionParams, TextDocuments, TextDocumentSyncKind } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { ServerFileSystem } from './file-system';


// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

connection.console.info(`ADL Language Server started. [static-loader: ${usingStaticLoader}]`);

// Create a simple text document manager. The text document manager
// supports full document sync only
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
let apiModel: ApiModel;

// HANDLE INITIALIZE EVENT
connection.onInitialize((params: InitializeParams) => {
  const capabilities = params.capabilities;

  // Does the client support the `workspace/configuration` request?
  // If not, we will fall back using global settings
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      // Tell the client that the server supports code completion
      completionProvider: {
        resolveProvider: true
      }
    }
  };
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true
      }
    };
  }
  return result;
});

// HANDLE INITIALIZED EVENT
connection.onInitialized(async () => {
  const fs = new ServerFileSystem(connection);
  fs.cwd = (await connection.workspace.getWorkspaceFolders())?.first?.uri || '';
  apiModel = await new ApiModel(fs).load();

  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    await connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }

  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log('Workspace folder change event received.');
    });
  }
});

// The example settings
interface ExampleSettings {
  maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

// HANDLE CONFIG CHANGE EVENT
connection.onDidChangeConfiguration(change => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear();
  } else {
    globalSettings = <ExampleSettings>(
      (change.settings.languageServerExample || defaultSettings)
    );
  }

  // Revalidate all open text documents
  // documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: 'adl'
    });
    documentSettings.set(resource, result);
  }
  return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
  documentSettings.delete(e.document.uri);
});

function convertSeverity(severity: RuleSeverity): DiagnosticSeverity {
  if (severity === 'error') {
    return 1;
  } else {
    return 2;
  }
}

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(async change => {
  if (apiModel) {
    const changedPath = apiModel.fileSystem.relative(change.document.uri);
    const changedFile = apiModel.where(each => each.getFilePath().replace('/', '').replace(/\//g, '\\') === changedPath);
    const diagnostics = [...apiModel.linter.run(changedFile)];
    processLinterDiagnostics(diagnostics, change.document.uri);
  }
});


function processLinterDiagnostics(linterDiagnostic: Array<LinterDiagnostic>, uri: string){
  const diagnostics: Array<Diagnostic> = [];
  for (const each of linterDiagnostic) {
    
    const diagnostic: Diagnostic = {
      ...each,
      severity: convertSeverity(each.severity),
    };

    diagnostics.push(diagnostic);
  }

  // Send the computed diagnostics to VSCode.
  connection.sendDiagnostics({ uri: uri , diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
  // Monitored files have change in VSCode
  connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(

  // THIS IS EXAMPLE CODE -------------------------------------------------------------------
  (_textDocumentPosition: TextDocumentPositionParams): Array<CompletionItem> => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    return [
      {
        label: 'TypeScript',
        kind: CompletionItemKind.Text,
        data: 1
      },
      {
        label: 'JavaScript',
        kind: CompletionItemKind.Text,
        data: 2
      }
    ];
  }
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    if (item.data === 1) {
      item.detail = 'TypeScript details';
      item.documentation = 'TypeScript documentation';
    } else if (item.data === 2) {
      item.detail = 'JavaScript details';
      item.documentation = 'JavaScript documentation';
    }
    return item;
  }
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();


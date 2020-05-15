# ADL Tooling 

## ADL Core Library
- Provide the core functionality for loading/parsing/manipulating/etc ADL and OpenAPI models
- Provides an extension model to allow additional support for defining:
  - additional modifiers (constraints, defaulters,etc) for core types
  - additional data types, protocols, encodings
  - new linting rules/fixes
  - custom-style resources (ie, ARM Resources ) and be able to detect them from OpenAPI sources

<hr>

## ADL CLI tool

### Requirements:
- Generate a template project to start working with ADL:
  > `adl init`  - creates the basic files to start writing ADL

- Run the linter on the ADL project
  > `adl lint [--fix] [--format]` - report any issues with the current project  (and optionally autofix? reformat code?)

- Manage ADL extension packages for this project
  > `adl install <package>` - install an ADL extension package into the current project<br>
  > `adl remove <package>` - remove an ADL extension package from the current project<br>
  > `adl restore` - restores registered packages for the ADL project<br>

- Import APIs/Models from OpenAPI 2/3
  > `adl import <filename.yaml|json>` - reads the OpenAPI files and adds the models to the curent project

- Export ADL to OpenAPI 2/3
  > `adl export --openapi:<2|3> <targetFolder>` - outputs the model as OpenAPI 

- package up a ADL project
  > `adl pack`  - creates an ADL package that can be referenced from other projects
<hr>

## ADL Authoring (Linting/Rules/Fixes/Refactorings)

### General Requirements
- The ADL core library should expose the linting/fixing features thru the API (works thru the library, so that it's available to VSCode Extension and CLI alike )
- The functionality should be extensible with a simple ADL Extension package. 
- Rules should have acess to the whole API
- A given rule should be able to run in < 20 msec, with a target less than 5 msec
- a VSCode langauge extension that exposes the linting/fixing/refactorings to an Author

### VSCode Extension
- loaded when you have an [`api.yaml`] file (the root project/metadata file)
- regenerates a .tsconfig file (or just provides it as a 'virtual' file? )
- Highlights issues found in ADL projects as it's being edited.

<hr>

## Additional Thoughts:
- Sharing API/Models between projects? (not just file imports?)
- Should you be able to reference API files on remote locations (ie, import { someresource } from 'https://....' )
- Should we be able to publish an API Package? ie, pack up an ADL project and be able to have it hosted somewhere, and potentially reference it?



# Proposed Timeline: 

### May 8
  - Abstract Model clearly defined 
  - OAI2, OAI3 input deserialization     
  - Sourcemap API 

### May 29
  - TS serialization 
  - TS deserialization full 
  - ALPHA ADL Consumer API (load/save/manipulate model*)
  - What's working: Able to generate models.

### Jun 5
  - OAI2, OAI3 output serialization 

### Jun 12 
  - CSDL investigations (design to support MS Graph/ASPNET+OData?)
  - extension plugins support

### Jun 26
  - BETA ADL consumer API complete
  - TS + C# bindings
  - [Nelson] - initial integrated linting support


## Nelson Timeline [initial swag]:

Nelson's project is going to be improving the authoring and reviewing experience in [langauge-server-compatible] editors (ie, VSCode) 

- add support for creating 'linting' rules that can be applied to ADL 
  (if possible, it'd be nice to be able to get that based on the AM, so any input)
- extend the design of the plugin support so that linting rules come with the typings/extension library
- create a vscode extension that can offer by enhanced intellisense around ADL constructs (ie,context-aware completion ).


### Jun 1 
  - Investigation:
    - experiment with ESLint framework and vscode language service
    - determine if ADL should provide it's own linter or extend ESLint (does ESLint support project-wide linting)
    - identify feaures for language service (navigation, intellisense, etc)
    - Design ADL linting service, including pluggability of additional rules [Azure,ARM,Etc]
### Jun 15
  - Implement a representative set of linting rules, encapsulated in an ADL extension
### Jun 29
  - initial integrated linting support
### Jul 6
  - Prototype VSCode language extension 
### Jul 20 
### Aug 3 (Done)
  - Full integrated linting (api-wide)
  - Extension for Authoring with VSCode, with enhanced navigation, intellisense, etc.

 

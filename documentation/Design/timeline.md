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


## Nelson Timeline:

Improve the authoring and reviewing experience of ADL by designing and developing:
- Support for creating and executing linting rules and auto-fixers.
- Visual Studio Code extension that provides diagnostics, navigation, refactoring and intellisense.

### June 5th. Investigation
- Experiment with Visual Studio Code language server.
- Identify language server features.
- Design ADL linting service, rules and extensibility (e.g. ARM, Azure rules) .
### June 19th. Engine Internals
- ADL basic linting engine internal functional.
- Implement a set of 20 linting rules encapsulated in ADL extension.
### June 26th. Implement a Github template repository for rules creation.
### July 10th. VS Code extension support for ADL rule engine.  At this point it should show errors inline and do fixes.
### July 24th. Advanced features (e.g. navigation, refactoring, intellisense)
### August 7th.
- Fully integrated linting (i.e. API Wide)
- Extension complete with navigation, intellisense, error checking and refactoring.

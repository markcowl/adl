# Expected Artifacts from this Project

## Initial Artifacts

- NPM: `adl-core` - ADL Core Library - API for programatically manipulating an ADL project
  - adl core code (serialization/manipulation/etc)
  - linting framework
  - extension loader
  
- NPM: `adl-tools` - the ADL CLI tool (create/import/export/restore/lint) an ADL project 
  - `adl` cli command

- Package: `adl.types` - contains the foundation adl typings for the language
- Package: `ARM.types` - contains the ARM extensions/typings for the language

- VSGallery: `adl` - the ADL VSCode plugin 
  - authoring support for ADL projects
  - interactive linting, refactoring, fixes, formatting, etc

- Nuget: `adl-core` - c# wrapper to use `adl-core` API from .NET

## Future thoughts/artifacts

Consider refactoring and making parts of the ADL core packages instead of built in?
- Package: `OpenAPI` (or `HTTP`) - the OpenAPI serialization and types specific to HTTP?

Support for other Protocols/Formats:
- Package `CSDL` - CSDL file import/export
- Package `AsyncAPI` - AsyncAPI file import/export
- Package `MQTT` - MQTT protocol  
- Package `AMQP` - AMQP protocol 


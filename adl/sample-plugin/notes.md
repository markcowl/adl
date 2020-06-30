## Extension Categories

### New Protocol 
- add support for a new wire protocol 
- requires deeper knowledge of the internal model
- events:
   - add an importer/parser?
   - would probably include all of a classification extension 

### Model/Protocol enhancements 
- may be specific to a protocol (ie, these apply to HTTP/REST)
- enhance protocols with new classification types (ie, 'ArmResource'), 
- events:
   - add an extension handler on a protocol (ie, handle x-ms-foo-bar in HTTP/REST )
   - add a query by classification type with new results (does this alter existing queries? ie, if there is a ArmResource, are they still a 'resource' or operationGroup?)

- Add things that properties and parameters can have
  - add new constraints, defaulter, or other type refinement (ie, something that marks the model with something for version - conversion?) (used via Intersections )
  - additional Annotations on everything (ie, doctags)
  - filter/query by annotation
  - would need to add the ADL delcarations for the elements being added. Converter<'...'>

### Linting Rules 
- provides enhanced linting errors and warnings, and refactorings


### ADL Compositions
- Pure ADL - adding new types for reuse, no code necessary.
  - if it's all pure ADL, how does the consumer get this -- this would require us to load ADL typings extensions during parsing? 
  - which means we're going to have to dig into the config, get the typings info an pull it in.


## Api Consumers
 - generators (ie, autorest)
 - ADL CLI (import/export)
 - C# Bindings

# Ecosystem 

[ADL Extensions]                                              == [ADL Core]              == [Tooling]
  - Builtins
    - (http/rest protocol/openapi import/export)

  - BestPractices (generic)
    - linter rules (ie, don't use inline models, etc)
    - refactorings (find duplicate models, etc)

  - Azure DataPlane
    - common patterns?

  - ARM 
    - Common Response Patterns
    - ARM-Resources (subresource, proxy, etc)
    - Annotate for conversion

  

  
                                                                                              [AutoRest]
                                                                                                  - Client SDK Generation
                                                                                                  - Validation/Versioning Service Generation
                                                                                                  - Server Stubs Generation


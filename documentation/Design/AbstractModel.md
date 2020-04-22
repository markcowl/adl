## Abstract Model
### internal data
  - the files that this came from
  - the base folder 
### Attic - 
    - presevered data and extensions that are unused.

### Metadata 
  - API Metadata, Info, external docs, tags, etc.

### Schema - object definitions, enums, constants and data types
    interfaces - object interface definitions (may inherit, be polymorphic, etc)
    constants - a single constant value, represented with a single identifier (ie MAX_SIZE=256)
    enums - a grouped selection of a set of constant values and and identifiers.  (ie, color { red=0, blue=2, green=1}) 

    // Should these be generically referred to as  'attributes' ? 
    constraints - a declared constraint that can be used on a usage of a schema  
    defaults - ? (declare a means to default a value) -- how would this be used?

    aliases - a usage of a declared object,constant,enum or alias (may enhance with optionality, anyOf, oneOf, mutability, nullability, etc.)
      (should there be an alias for every $ref? Or only where there is a $ref in a dictionary? )

### Resources [aka OperationGroups]
     -> connects to Schemas (can bind schemas to a standard template (ie, CRUD) )
     -> connects to [Protocol]/Operations
     -> connects to Aggregate/Operations (for multi-step operations)

### Http
    Authentication - Security information (global/path/operation) -- can 'path' be handled transparently?
    Connections - Server information (global/path/operation)

    Operations - a path+method  (or x-ms-paths+method) 
      - Requests (there may be several options) -- should we split that into separate operations? 
        - parameters  
      - Reponses/Exceptions (there may be several options)
        headers, etc.

    #### Components
      Requests - [declared/anonymous]
      Responses - [declared/anonymous]
      Headers - [declared/anonymous]
      Parameters - [declared/anonymous]
    
### Attic -- things I don't know if/how we'll actually support (how to serialize into )
      Callbacks - Currently unused -- no idea at the moment.
      
      Links - Currently unused -- no idea at the moment. 
  
### Aggregate
    Operations  - Operations that are a series of operations that are bound together.

## extensions

- `x-ms-code-generation-settings` - DROP

- `x-ms-skip-url-encoding` - path and query parameters
- `x-ms-parameter-grouping` - creates an alias for a set of parameters (ie, a single parameter is declared that has a schema declared, and it gets  )
- `x-ms-parameter-location` - paarameter attribute (@x-ms-parameterLocation 'client'|'method')

- `x-ms-client-name` - attribute to override the name - should we implement this the other way (ie, '@serializedName' ?  )
- `x-ms-client-flatten`  - tells the generator that the model or parameter should be flattened  (@x-ms-client-flatten)
- `x-ms-parameterized-host` - parameterized server information. Affects parameters -- how to encode? 
- `x-ms-discriminator-value` - marks the value that a disciminated model should use @kind - 
- `x-ms-mutability` - create/read/write flags -- via an alias?
- `x-ms-examples` - example data -- can that be folded into OAI3 examples?
- `x-ms-error-response` - marks a response as an exception (ie, 'default' would be this way  )
- `x-ms-odata` ?
- `x-ms-pageable` - an operation can be marked pagable, should support ongoing request 
- `x-ms-long-running-operation` -  Azure ARM  LRO pattern
- `x-ms-long-running-operation-options`
- `x-ms-azure-resource` - schema object tagged as azure 
- `x-ms-request-id` -? 
- `x-ms-client-request-id` -?
- `x-nullable` - should permit null as a valid value.

### Operation thoughts

HttpOperation
  - No Body
  - Body - Serialized Model
  - Body - Blob 
  - Body - Multi-part body (multiple blob?)

HttpResponse
  - No Body
  - Body - SerializedModel 
  - Body - Blob

Input
  HttpParameter
    - Header
    - Query
    - Cookie
    - Path
  Request (body)
  
Output 
  HttpResponse
  HttpException
  Headers (collection?)

Serialization:
  -- process object
  -- process array
  -- process dictionary<>
  -- process extensions 
  -- process reference


- odata (?)


QUESTIONS: 
  - Should the OAI2/OAI3 deserializer only support adding x-* extensions (or should the whole deserializer be built pluggable) -- I'm thinking just make extensions pluggable.


  


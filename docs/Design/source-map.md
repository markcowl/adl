# Source Maps 

## Definitions: 

#### `AM` - Abstract Model
  - a single object graph that represents an entire API surface

#### `SM` - Serialized Model 
  - one or more [ADL,OAI2,OAI3] files that comprise an API surface

#### `SSM` - Serialized Source Map
  - a collection of compiled source maps that map to/from a collection of sources/targets
  - internally: it's a two collections of persisted SourceMap objects
  - each collection should have one SourceMap entry for each target file.

## Source Map Management Internals

#### `ESM` - Element Source Map 
  - a 'source-element' to 'destination-element' map between two object graphs
  - these are bidirectional many-to-many maps 
  - unlike unidirectional source maps, each element in a target object graph may be related to multiple elements in the source object graph.
  - `ESM`s  are used only at serialization time, the serialized outputs should have an

#### `Path`  - a navigable path to an element
  - is an array of child keys to get to an element - child keys can be string or number.
  ``` typescript
  type Path = Array<string|number>
  ```
  - the keys are format-specific 
    - YAML it's property names or array index 
    - TS it's accessor : value
    ``` typescript
      // the following path
      [':class','foo', ':property', 'bar' ]

      // calls sourceFile.getClass('foo').getProperty('bar') 
      // on the target on
    ```

#### `SourceLink` - a link to a node in another graph
  - is an abstract means to describe the target 
  ``` typescript
  interface { 
    /* filename */
    file: string;
    /* path to a node */
    path: Path; 

    /* ? recurse the nodes on each side to create a fine-grained map. */
    recursive?: boolean;
  }
  ```
  - the `path` to the node is either JSON-path-style navigation - ie, `['components','schemas','foo','properties', 'bob'`) or a custom equivalent for the object graph type - ie, TS source code could be `[':interface','foo',':property','bob']` -- which would have to have specific support in the source-map-resolver module.
  - ? recurse nodes that match between the models - this might require a bit of helping if there are things that are structurally not identical, but conceptually identitcal. 

#### `SourceLinks` - a set of links betweeen elements in two reprensentations
  ``` typescript
  interface { 
    source: Path; // the path to the node we're currently 
    generated: Array<SourceLink>; // the generated locations that refer to that
  }
  ```

## Serializaiton

On serialization (AM -> SM) the serializer must produce an AM to SM `ESM` -- these are just links
between the two models. The (AM + SM[] + ESM) can then be sent to the Resolver to produce the actual map.

## Resolution

The Resolver (which should be out-of-proc) can produce a standard source-map.
This process is computationally expensive, given that the resolver has to be given the AM and SM and the ESM,
and then must actually parse them to get an AST/CST for the document, then must traverse both document models
to generate 

And then given two SMs and an AM should be able to calculate a SSM from one SM to the other. 


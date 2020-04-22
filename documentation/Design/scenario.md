# Scenarios

## Defining a third-party constraint

The necessity for creating a constraint for a 


#### Components

- `MyProject.types` -- a non-code typings library that provides authoring support via typescript ambient declarations

``` typescript
/** The maximum number of items allowed in a dictionary */
declare interface MaxDictionaryItems<N extends number> extends Attributes.Constraint {
}

```

- `MyProject.constraints` -- an ADL plugin that provides the runtime implementation of the constraint 

``` typescript

export class MaxDictionaryItems extends Constraint {
  private count;
  constructor(parameters: Array<any>) {
    count = parameters[0];
  }
  // verify that the length is less than declared.
  validate(instance: Value) {
    return length( instance ) <= this.count;
  }
}

register(MaxDictionaryItems)
```

## Cairo - a validation and version conversion engine 

 - loads up an API with multiple API versions
 - converts between JSON object representations against two models
 - could delcare a function that knows how to convert between final and earlier model
 
``` typescript
function convert(source: api.2019.Widget, destination: api.2020.Widget ) {
  validate( source );

  // deep copy the original
  return clone( source, { 
    // set the default for a new field
    newField: 100,

    // replace a field that was an int with a string
    replacedField = `source.ReplacedField`,

    // rename a field, and remove the original.
    renamedField = source.OldField,
    oldField = undefined,
  }
}

```
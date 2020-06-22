A rule for adl is defined in the following way:

```js
export default <Rule> {
  runOn: "edit",
  meta: {
    name: "required-read-only-properties",
    code: "R2056",
    type: "error",
    description: "A model property cannot be both readOnly and required.",
    documentationUrl: "RULE URL",
    category: "SDK Error"
  },
  onProperty: (model, property) => {
    if (property.required && property.readonly) {
      
      return {
        message: `The property ${property.name} is marked both as readOnly and required, which is forbidden.`,
        suggestion: [
          {
            description: "Set required: false.",
            fix: () => {
              property.readonly = false;
            }
          },
          {
            description: "Set remove: false",
            fix: () => {
              property.required = false;
            }
          },
          {
            description: "Set required: false and readonly: false.",
            fix: () => {
              property.required = false;
              property.readonly = false;
            }
          }
        ]
      } 
    }
    return;
  }
}
```

## Rule Anatomy

- runOn: Specifies the condition for the rule to be run. Possible values are "edit" and "demand". 
- meta: Contains information about the rule.
    - name: Just the name of the rule. By convention the file containing the rule should match this name.
    - code: A code used to index the rule.
    - type: There are two type of rules: warnings and errors. Warnings are things that could result in functional, but low quality generated code. In the other hand errors will result in things that are stricly forbidden.
    - description
    - documentationUrl: This is link to the full documentation of the rule. 
    - category: This is an umbrella identifier for a set of rules. This can be used to run a set of rules.
- on\<Element>: This function returns a `RuleResult`. Depending on the rule there can be multiple on\<Element> functions. For example:

``` js
  meta: 
  ...
  onOperation: (model, operation) => {
    ....
  },
  onProperty: (model, property) => {
    ...
  }
```

### RuleResult

A rule result contains information about fixing the error in `message` and a fix. The fix is optional depending on the rule. The structure is:
 
- message: This describes the warning or error. You can use string interpolation to be more specific about the error like shown above.
- suggestion: This contains an array of fixes.

In the rule above, the rule result is:

``` js
{
  message: `The property ${property.name} is marked both as readOnly and required, which is forbidden.`,
  suggestion: [
    {
      description: "Set required: false.",
      fix: () => {
        property.readonly = false;
      }
    },
    {
      description: "Set remove: false",
      fix: () => {
        property.required = false;
      }
    },
    {
      description: "Set required: false and readonly: false.",
      fix: () => {
        property.required = false;
        property.readonly = false;
      }
    }
  ]
}
``` 

### Fix

A fix contains:

- description: The description of the fix to be applied on the api model.
- fix: This is a function that modifies the element for which the rule is operating on.

In the example above a fix is:

``` js
{
  description: "Set required: false.",
  fix: () => {
    property.readonly = false;
  }
}
```


### References
- https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#error-vs-warning
- https://eslint.org/docs/developer-guide/working-with-rules
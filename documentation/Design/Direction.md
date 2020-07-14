# ADL Language Design Process

## Clarity around using TS

The initial idea around using TS was as a way to get a whole lot of 
functionality for free, without having to do much except start up an editor.

> #### By using TS today, we gain a lot of functionality at very low cost and are putting a downpayment on a Api Description Language for the future.

It's becoming clear that there is a limit to how far we can go with such a notion, and in the 
longer term we're going to have to transition away from acting as a 'tag-along' 
on top of TS, and go our own way.

If we look at the use of leveraging TS as a __strictly temporary measure__ then we should be looking to the 
future when designing language features/constructs and indicate the how we feel the same thing
would be expressed in the future. This gives us a clear ability to reason why we're doing
something today, and highlight and recognize the shortcomings of a given approach, and also
identify how we think the feature would be implemented in the future when we're more in control
of the language components directly.

By being explicit about temporary use of TS, we can also steer the design to something we're 
going to be satisfied with in the future. 

We could ask 'why not fork immediately?', it most certainly be cost-prohibitive to do that at 
the moment, when we can accomplish so much, and start the development of the ecosystem/extensions
before the final language is even possible.

## Language Versions:
<hr>

  - `0.1.x` - __ADL-Prototype__ -- 'tag-along' on top of TS, leveraging the existing editor support for it, 
    and extending it with custom linting, refactoring, and language constructs on top of TS primitives

    With the `0.1` version of the language, we should unblock the ability to flesh out the ADL language 
    APIs, define the extensibility interfaces, and provide the means to allow the creation of tools to 
    consume ADL as well as enhance the authoring environment.

    The ADL APIs should be sufficiently developed that isolate the extensibility and tool developers 
    from expected changes to the language. 

<hr>

  - `0.9.x` - __Shallow Fork__ -- clone the existing components and do a cosmetic refactoring of TS 
    <br>changing '.ts' file extension to one specific to ADL (ie, '.adl' )

    changing strings and names of things in the core to refer to 'ADL' and 'ApiDescriptionLanguage' 
    instead of 'ts' and 'TypeScript'

    package up the forked vscode extension, tooling and libraries in order to be able to bootstrap 
      ADL consumers easily.

<hr>

  - `1.0+` - __ADL-Release__ - start enginieering the language to be __precisely__ what we want to be.
      <br>at some point in the not-too-distant future, we can opt to do extensive 
      alteration to the fork of TS to allow us to enrich the language with more natural constructs 
      instead of simply overloading the existing TS notation that we come up with.

      This enables us to richly extend the language in a forward compatible way when we're ready

       we can add linting and refactoring rules to auto-upgrade to the cleaner syntax to support
      new constructs. This allows developers to build prototype-level ADL definitions before the
      final syntax is decided upon, but does not lock them into the prototype-level syntax forever.
<hr>


## Designing Language Features with a two-track process.

When we design language features in the immediate term, we can be proactive in looking towards the 
future language definition, and have the process show the 'what-it-will-look-like-now' (because 
we're just using TS) and 'what-should-it-look-like' for the V1 era, where we control the fundemental
langauge constructs, and can use our own keywords.

By being clear around the design of the API and extension model, we can make a very strong attempt 
to be forward compatible with the V1 verison of the language where extensions should work with little
or no changes at all.

### Example of two-track language design:

We can use the following format as an example how to handle a two-track language design

> __NOTE:__ This is only an example of documenting a comparison between two versions, 
this is not a proposal for a specific change.

<table><tr><th>ADL-prototype</th><th>ADL-V1</th><tr><tr><td>

``` typescript
/**
 * @model <-- encourage the tagging of interfaces 
 * 
 * My Model type
 * @since v1
 */
export interface Person {

  /** the name of the person */
  name: String<MaxLength<24>>;
}
```

</td><td>

``` typescript 

/**
 * My Model type
 * @since v1
 */
model Person {  // <-- change the 'interface' to
                // 'model', and remove the `@model` tag
                // and don't bother with the `export`

  /** the name of the person */
  [MaxLength(24)]
  name: string;
}
```

</td></tr></table>



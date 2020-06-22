# ADL Direction Proposal

## Clarity around using TS

The initial idea around using TS was as a way to get a whole lot of 
functionality for free, without having to do much except start up an editor.

> #### By using TS today, we gain a lot of functionality at very low cost and are putting a downpayment on a Api Description Language for the future.

It's becoming clear that there is a limit to how far we can go with such a notion, and in the 
longer term we're going to have to transition away from acting as a 'tag-along' 
on top of TS, and go our own way.

If we look at the use of leveraging TS as a temporary measure then we should be looking to the 
future when designing language features/constructs and indicate the how we feel the same thing
would be expressed in the future. This gives us a clear ability to reason why we're doing
something today, and highlight and recognize the shortcomings of a given approach, and also
identify how we think the feature would be implemented in the future when we're more in control
of the language components directly.

By being explicit about temporary use of TS, we can also steer the design to something we're 
going to be satisfied with in the future. 

We could ask 'why not fork immediately?', it would probably be cost-prohibitive to do that at 
the moment, when we can accomplish so much, and start the development of the ecosystem/extensions
before the final language is even possible.

## Language Versions:
  - `0.9` - __TS Subset__ -- 'tag-along' on top of TS, leveraging the existing editor support for it, 
    and extending it with custom linting, refactoring, and language constructs on top of TS primitives

  - `1.0` - __Shallow Fork__ -- clone the existing components and do a cosmetic refactoring of TS 
    - changing '.ts' file extension to one specific to ADL (ie, '.adl' )

    - changing strings and names of things in the core to refer to 'ADL' and 'ApiDescriptionLanguage' 
    instead of 'ts' and 'TypeScript'

    - package up the forked vscode extension, tooling and libraries in order to be able to bootstrap 
      ADL consumers easily.

  - `2.0` - __Deep fork__ - start enginieering the language to be exactly what we want to be.
      - at some point in the not-too-distant future, we can opt to do extensive 
      alteration to the fork of TS to allow us to enrich the language with more natural constructs 
      instead of simply overloading the existing TS notation that we come up with.

      - This enables us to richly extend the language in a forward compatible way when we're ready

      - we can add linting and refactoring rules to auto-upgrade to the cleaner syntax to support
      new constructs.


## Designing Features for the future

When we design language features in the immediate term, we can be proactive in looking towards the 
future language definition, and have the process show the 'what-it-will-look-like-now' (because 
we're just using TS) and 'what-should-it-look-like' for the V2 era, where we control the fundemental
langauge constructs, and can use our own keywords.

By being clear around the design of the API and extension model, we can make a very strong attempt 
to be forward compatible with the V2 verison of the language where extensions should work with little
or no changes at all.

ADL already has a few runtime dependencies on (`typescript` and `ts-morph`, etc) and if the intent
is to expose that to the ADL _extension_ developer, we'll re-export the functionality that we want 
exposed. That way we're not going to get stuck later if we have to redirect how we want extensions 
to use certain APIs. 


## Ideas around `v2` constructs of `v1` realities

We can look at some of the constructs that we're generating and visualize what we think we'd like 
to be able to say in the future. TypeScript Interfaces are being used for several things right now 
that we would likely want to split into more specific constructs in the future.

If we encourage the tagging of an interface with the eventual type that we feel it would be in the 
future, we can be very explicit about intent. The fallback if an Interface is not tagged would be to 
infer from it's construction (ie, `model`s don't have methods,etc)

> v1: 

``` typescript
/**
 * @model <-- encourage the tagging of interfaces with the purpose 
 * 
 * My Model type
 * @since v1
 */
export interface Person {
  
  /** the name of the person */
  name: string;

  /** 
   * Role the person has.
   * @deleted v2
   * @see {@link role$0} 
   */
  readonly role: 'Manager' | 'Employee';

  /** 
   * Role the person has
   * 
   * @since v2
   *
   * @note the role changed in v2 to support multiple roles, and it's not readonly anymore
   */
   role$0: Array<RoleType>;  // mangling necessary in ADL v1
}

```

> ADL V2 equivalent: 

``` typescript 
/**
 * My Model type
 * @since v1
 */
export model Person {  // <-- change the 'interface' to 'model', and remove the `@model` tag
  
  /** the name of the person */
  name: string;

  /** 
   * Role the person has.
   * @deleted v2
   */
  readonly role: 'Manager' | 'Employee';

  /** 
   * Role the person has
   * 
   * @since v2
   *
   * @note the role changed in v2 to support multiple roles, and it's not readonly anymore
   */
   role: Array<RoleType>;  // in V2 we support a redelcaration of a property without mangling
}

```
  

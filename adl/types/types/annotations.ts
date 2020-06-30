/** attributes to mark primitive types with purpose */
export declare namespace Attributes {
  /** the accuracy in bits with which a number can be represented. */
  interface Precision<bits extends number> {
    $precision?: bits;
  }

  /** A constraint is a declarative type used in intersection types to specify a run time value validation  */
  interface Constraint {
  }

  interface Standard<Uri extends string> {
    readonly $uri?: Uri;
  }
}



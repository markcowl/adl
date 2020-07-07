/** attributes to mark primitive types with purpose */
export declare namespace Traits {
  /**
   * @trait
   */
  interface Trait<T= [any]> {
    $appliesTo?: T;
  }

  /**
   * the accuracy in bits with which a number can be represented.
   * @trait
   */
  interface Precision<bits extends number> extends Trait<number> {
    $precision?: bits;
  }

  /**
   * A constraint is a declarative type used in intersection types to specify a run time value validation
   * @trait
   */
  interface Constraint<T = [any]> extends Trait<T> {

  }

  /**
   * @trait
   */
  interface Standard<Uri extends string> {
    readonly $uri?: Uri;
  }
}
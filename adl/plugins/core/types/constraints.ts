import { Attributes } from './annotations';

/** A valid regular expression to apply as a constraint on a value
 * 
 * @param T - the regular expression
*/
export declare interface RegularExpression<T extends string> extends Attributes.Constraint {
  $pattern?: T;
}

/** The maximum length of a string value */
export declare interface MaxLength<N extends number> extends Attributes.Constraint {
  $maximumLength?: N;
}

/** the minimum length of a string value */
export declare interface MinLength<N extends number> extends Attributes.Constraint {
  $minimumLength?: N;
}

/** a number value that is a multiple of a given number */
export declare interface MultipleOf<N extends number> extends Attributes.Constraint {
  $multipleOf?: N;
}

/** a maximum value */
export declare interface Maximum<N extends number> extends Attributes.Constraint {
  $maximum?: N;
}

/** a minimum value */
export declare interface Minimum<N extends number> extends Attributes.Constraint {
  readonly $length?: N;
}

/** an exclusive maximum value (that is less than, not equal to) */
export declare interface ExclusiveMaximum<N extends number> extends Attributes.Constraint {
  readonly $maximum?: N;
}

/** an exclusive minimum value (that is greater than, not equal to) */
export declare interface ExclusiveMinimum<N extends number> extends Attributes.Constraint {
  readonly $minimum?: N;
}

/** the maximum number of items in an Array */
export declare interface MaxItems<N extends number> extends Attributes.Constraint {
  readonly $maximumItems?: N;
}

/** the minimum number of items in an Array */
export declare interface MinItems<N extends number> extends Attributes.Constraint {
  readonly $minumumItems?: N;
}

/** indicates the contents of the array must be unique items */
export declare interface Unique extends Attributes.Constraint {
  readonly $unique?: true;
}

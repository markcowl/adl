import { Traits } from './annotations';
import { integer } from './primitives';

/** A valid regular expression to apply as a constraint on a value
 * 
 * @param T - the regular expression
*/
export declare interface RegularExpression<T extends string> extends Traits.Constraint<string> {
  $pattern?: T;
}

/** The maximum length of a string value */
export declare interface MaxLength<N extends number> extends Traits.Constraint<string> {
  $maximumLength?: N;
}

/** the minimum length of a string value */
export declare interface MinLength<N extends number> extends Traits.Constraint<string> {
  $minimumLength?: N;
}

/** a number value that is a multiple of a given number */
export declare interface MultipleOf<N extends number> extends Traits.Constraint<integer> {
  $multipleOf?: N;
}

/** a maximum value */
export declare interface Maximum<N extends number> extends Traits.Constraint<number> {
  $maximum?: N;
}

/** a minimum value */
export declare interface Minimum<N extends number> extends Traits.Constraint<number> {
  readonly $length?: N;
}

/** an exclusive maximum value (that is less than, not equal to) */
export declare interface ExclusiveMaximum<N extends number> extends Traits.Constraint<number> {
  readonly $maximum?: N;
}

/** an exclusive minimum value (that is greater than, not equal to) */
export declare interface ExclusiveMinimum<N extends number> extends Traits.Constraint<number> {
  readonly $minimum?: N;
}

/** the maximum number of items in an Array */
export declare interface MaxItems<N extends number> extends Traits.Constraint<Array<any>> {
  readonly $maximumItems?: N;
}

/** the minimum number of items in an Array */
export declare interface MinItems<N extends number> extends Traits.Constraint<Array<any>> {
  readonly $minumumItems?: N;
}

/** indicates the contents of the array must be unique items */
export declare interface Unique extends Traits.Constraint<Array<any>> {
  readonly $unique?: true;
}
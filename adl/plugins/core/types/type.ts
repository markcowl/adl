/** attributes to mark primitive types with purpose */
export declare namespace Type {

  /** a whole number; a number that is not a fraction. */
  interface Integer {
    $type?: 'integer';
  }

  /** a whole number; a number that is not a fraction. */
  interface FloatingPoint {
    $type?: 'floatingpoint';
  }

  /** a value representing a Calendar date */
  interface Date {
    $type?: 'date';
  }

  /** a value representing a Time */
  interface Time {
    $type?: 'time';
  }
}
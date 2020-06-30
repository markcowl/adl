/** attributes to mark primitive types with purpose */
export declare namespace Type {
  /**
   * @type 
   */
  interface Model { 
    $type?: 'model';
  }

/**
 * @type
 */
  interface Enum {
    $type?: 'enum';
  }

/**
 * @type
 */
  interface Alias {
    $type?: 'alias';
  }


  /** 
   * a whole number; a number that is not a fraction.
   * 
   * @type
   */
  interface Integer {
    $type?: 'integer';
  }

  /** 
   * a whole number; a number that is not a fraction. 
   * 
   * @type
   */
  interface FloatingPoint {
    $type?: 'floatingpoint';
  }

  /** 
   * a value representing a Calendar date 
   * 
   * @type
   */
  interface Date {
    $type?: 'date';
  }

  /** 
   * a value representing a Time
   * @type
   */
  interface Time {
    $type?: 'time';
  }
}
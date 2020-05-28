
/**
 * @description An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.
 * @since 2018-11-25
 */
export interface LogPattern {
    /**
     * @description The name of the log pattern. A log pattern name can contains at many as 30 characters, and it cannot be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.
     * @since 2018-11-25
     */
    PatternSetName: string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the log pattern. A log pattern name can contains at many as 50 characters, and it cannot be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.
     * @since 2018-11-25
     */
    PatternName: string & MaxLength<50> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description A regular expression that defines the log pattern. A log pattern can contains at many as 50 characters, and it cannot be empty.
     * @since 2018-11-25
     */
    Pattern: string & MaxLength<50> & MinLength<1>;
    /**
     * @description Rank of the log pattern.
     * @since 2018-11-25
     */
    Rank: int64;
}

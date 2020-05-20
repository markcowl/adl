
/**
 * @description An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.
 */
export interface LogPattern {
    /**
     * @description The name of the log pattern. A log pattern name can contains at many as 30 characters, and it cannot be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.
     */
    PatternSetName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The name of the log pattern. A log pattern name can contains at many as 50 characters, and it cannot be empty. The characters can be Unicode letters, digits or one of the following symbols: period, dash, underscore.
     */
    PatternName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A regular expression that defines the log pattern. A log pattern can contains at many as 50 characters, and it cannot be empty.
     */
    Pattern: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Rank of the log pattern.
     */
    Rank: int64;
}

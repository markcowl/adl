
/**
 * UpdateLogPatternRequest
 * @since 2018-11-25
 */
export interface UpdateLogPatternRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the log pattern set.
     * @since 2018-11-25
     */
    PatternSetName?: string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the log pattern.
     * @since 2018-11-25
     */
    PatternName?: string & MaxLength<50> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The log pattern.
     * @since 2018-11-25
     */
    Pattern: string & MaxLength<50> & MinLength<1>;
    /**
     * @description Rank of the log pattern.
     * @since 2018-11-25
     */
    Rank: int64;
}

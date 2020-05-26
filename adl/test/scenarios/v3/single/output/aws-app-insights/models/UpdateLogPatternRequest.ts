
/**
 * UpdateLogPatternRequest
 * @since 2018-11-25
 */
export interface UpdateLogPatternRequest {
    /** @since 2018-11-25 */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    PatternSetName?: string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    PatternName?: string & MaxLength<50> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    Pattern: string & MaxLength<50> & MinLength<1>;
    /** @since 2018-11-25 */
    Rank: int64;
}

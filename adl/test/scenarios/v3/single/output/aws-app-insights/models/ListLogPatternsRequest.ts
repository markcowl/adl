
/**
 * ListLogPatternsRequest
 * @since 2018-11-25
 */
export interface ListLogPatternsRequest {
    /** @since 2018-11-25 */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    PatternSetName: string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    MaxResults: int64 & Minimum<1> & Maximum<40>;
    /** @since 2018-11-25 */
    NextToken: string;
}

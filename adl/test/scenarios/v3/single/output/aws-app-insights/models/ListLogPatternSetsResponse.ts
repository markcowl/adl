
/**
 * @since 2018-11-25
 */
export interface ListLogPatternSetsResponse {
    /** @since 2018-11-25 */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    LogPatternSets: Array<string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">>;
    /** @since 2018-11-25 */
    NextToken: string;
}

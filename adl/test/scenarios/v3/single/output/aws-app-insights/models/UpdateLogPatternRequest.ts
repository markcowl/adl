
/**
 * UpdateLogPatternRequest
 */
export interface UpdateLogPatternRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The name of the log pattern set.
     */
    PatternSetName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The name of the log pattern.
     */
    PatternName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The log pattern.
     */
    Pattern: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Rank of the log pattern.
     */
    Rank: int64;
}

import { LogPattern } from './LogPattern';
/**
 * @since 2018-11-25
 */
export interface CreateLogPatternResponse {
    /**
     * @description The successfully created log pattern.
     * @since 2018-11-25
     */
    LogPattern: LogPattern;
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
}

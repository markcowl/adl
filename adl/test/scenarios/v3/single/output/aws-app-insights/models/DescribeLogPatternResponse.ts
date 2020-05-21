import { LogPattern } from './LogPattern';
export interface DescribeLogPatternResponse {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The successfully created log pattern.
     */
    LogPattern: LogPattern;
}

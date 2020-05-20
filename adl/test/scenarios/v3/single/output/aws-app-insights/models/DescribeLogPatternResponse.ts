import { LogPattern } from './LogPattern';
export interface DescribeLogPatternResponse {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The successfully created log pattern.
     */
    LogPattern: LogPattern;
}

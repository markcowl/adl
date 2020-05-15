import { LogPattern } from './LogPattern';
export interface CreateLogPatternResponse {
    /**
     * 
     * @description The successfully created log pattern.
     */
    LogPattern: LogPattern;
    /**
     * 
     * @description The name of the resource group.
     */
    ResourceGroupName: any;
}

import { LogPattern } from './LogPattern';
export interface UpdateLogPatternResponse {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: any;
    /**
     * @description The successfully created log pattern.
     */
    LogPattern: LogPattern;
}

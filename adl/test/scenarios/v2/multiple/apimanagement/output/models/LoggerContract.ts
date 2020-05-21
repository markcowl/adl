import { Resource } from './Resource';
import { LoggerContractProperties } from './LoggerContractProperties';
/**
 * @description Logger details.
 */
export interface LoggerContract extends Resource {
    /**
     * @description Logger entity contract properties.
     */
    properties: LoggerContractProperties;
}

import { LoggerContractProperties } from './LoggerContractProperties';
import { Resource } from './Resource';
/**
 * @description Logger details.
 */
export interface LoggerContract extends Resource {
    /**
     * @description Logger entity contract properties.
     */
    properties: LoggerContractProperties;
}

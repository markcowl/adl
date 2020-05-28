import { Resource } from './Resource';
import { LoggerContractProperties } from './LoggerContractProperties';
/**
 * @description Logger details.
 * @since 2019-12-01
 */
export interface LoggerContract extends Resource {
    /**
     * @description Logger entity contract properties.
     * @since 2019-12-01
     */
    properties: LoggerContractProperties;
}

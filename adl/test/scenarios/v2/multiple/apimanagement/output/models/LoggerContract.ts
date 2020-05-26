import { Resource } from './Resource';
import { LoggerContractProperties } from './LoggerContractProperties';
/** @since 2019-12-01 */
export interface LoggerContract extends Resource {
    /** @since 2019-12-01 */
    properties: LoggerContractProperties;
}

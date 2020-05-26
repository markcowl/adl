import { Resource } from './Resource';
import { SchemaContractProperties } from './SchemaContractProperties';
/** @since 2019-12-01 */
export interface SchemaContract extends Resource {
    /** @since 2019-12-01 */
    properties: SchemaContractProperties;
}

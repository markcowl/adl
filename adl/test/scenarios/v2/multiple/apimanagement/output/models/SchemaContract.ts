import { Resource } from './Resource';
import { SchemaContractProperties } from './SchemaContractProperties';
/**
 * @description Schema Contract details.
 * @since 2019-12-01
 */
export interface SchemaContract extends Resource {
    /**
     * @description Properties of the Schema.
     * @since 2019-12-01
     */
    properties: SchemaContractProperties;
}

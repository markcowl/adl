import { Resource } from './Resource';
import { SchemaContractProperties } from './SchemaContractProperties';
/**
 * @description Schema Contract details.
 */
export interface SchemaContract extends Resource {
    /**
     * @description Properties of the Schema.
     */
    properties: SchemaContractProperties;
}

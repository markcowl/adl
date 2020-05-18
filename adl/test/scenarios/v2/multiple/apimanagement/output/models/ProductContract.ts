import { ProductContractProperties } from './ProductContractProperties';
import { Resource } from './Resource';
/**
 * @description Product details.
 */
export interface ProductContract extends Resource {
    /**
     * @description Product entity contract properties.
     */
    properties: ProductContractProperties;
}

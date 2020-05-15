import { Resource } from './Resource';
import { ProductContractProperties } from './ProductContractProperties';
/**
 * 
 * @description Product details.
 */
export interface ProductContract extends Resource {
    /**
     * 
     * @description Product entity contract properties.
     */
    properties: ProductContractProperties;
}

import { Resource } from './Resource';
import { ProductContractProperties } from './ProductContractProperties';
/** @since 2019-12-01 */
export interface ProductContract extends Resource {
    /** @since 2019-12-01 */
    properties: ProductContractProperties;
}

import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/**
 * @description Product profile.
 */
export interface ProductTagResourceContractProperties extends ProductEntityBaseParameters {
    /**
     * @description Identifier of the product in the form of /products/{productId}
     */
    id: any;
    /**
     * @description Product name.
     */
    name?: any;
}

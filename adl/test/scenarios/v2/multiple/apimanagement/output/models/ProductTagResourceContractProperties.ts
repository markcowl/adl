import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/**
 * @description Product profile.
 */
export interface ProductTagResourceContractProperties extends ProductEntityBaseParameters {
    /**
     * @description Identifier of the product in the form of /products/{productId}
     */
    id: string;
    /**
     * @description Product name.
     */
    name?: string & MaxLength<300> & MinLength<1>;
}

import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/**
 * @description Product profile.
 */
export interface ProductContractProperties extends ProductEntityBaseParameters {
    /**
     * @description Product name.
     */
    displayName?: string & MaxLength<300> & MinLength<1>;
}

import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/**
 * @description Parameters supplied to the Update Product operation.
 */
export interface ProductUpdateProperties extends ProductEntityBaseParameters {
    /**
     * @description Product name.
     */
    displayName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

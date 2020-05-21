import { ProductContract } from './ProductContract';
/**
 * @description Paged Products list representation.
 */
export interface ProductCollection {
    /**
     * @description Page values.
     */
    value: Array<ProductContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

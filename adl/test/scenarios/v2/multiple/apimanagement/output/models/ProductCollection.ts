import { ProductContract } from './ProductContract';
/** @since 2019-12-01 */
export interface ProductCollection {
    /** @since 2019-12-01 */
    value: Array<ProductContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}

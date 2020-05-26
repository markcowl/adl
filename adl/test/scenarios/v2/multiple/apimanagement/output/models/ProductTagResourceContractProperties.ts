import { ProductEntityBaseParameters } from './ProductEntityBaseParameters';
/** @since 2019-12-01 */
export interface ProductTagResourceContractProperties extends ProductEntityBaseParameters {
    /** @since 2019-12-01 */
    id: string;
    /** @since 2019-12-01 */
    name?: string & MaxLength<300> & MinLength<1>;
}

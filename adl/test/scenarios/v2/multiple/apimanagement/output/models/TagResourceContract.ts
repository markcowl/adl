import { TagTagResourceContractProperties } from './TagTagResourceContractProperties';
import { ApiTagResourceContractProperties } from './ApiTagResourceContractProperties';
import { OperationTagResourceContractProperties } from './OperationTagResourceContractProperties';
import { ProductTagResourceContractProperties } from './ProductTagResourceContractProperties';
/** @since 2019-12-01 */
export interface TagResourceContract {
    /** @since 2019-12-01 */
    tag?: TagTagResourceContractProperties;
    /** @since 2019-12-01 */
    api: ApiTagResourceContractProperties;
    /** @since 2019-12-01 */
    operation: OperationTagResourceContractProperties;
    /** @since 2019-12-01 */
    product: ProductTagResourceContractProperties;
}

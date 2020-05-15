import { TagTagResourceContractProperties } from './TagTagResourceContractProperties';
import { ApiTagResourceContractProperties } from './ApiTagResourceContractProperties';
import { OperationTagResourceContractProperties } from './OperationTagResourceContractProperties';
import { ProductTagResourceContractProperties } from './ProductTagResourceContractProperties';
/**
 * 
 * @description TagResource contract properties.
 */
export interface TagResourceContract {
    /**
     * 
     * @description Tag associated with the resource.
     */
    tag?: TagTagResourceContractProperties;
    /**
     * 
     * @description Api associated with the tag.
     */
    api: ApiTagResourceContractProperties;
    /**
     * 
     * @description Operation associated with the tag.
     */
    operation: OperationTagResourceContractProperties;
    /**
     * 
     * @description Product associated with the tag.
     */
    product: ProductTagResourceContractProperties;
}

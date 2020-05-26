import { Resource } from './Resource';
import { TagContractProperties } from './TagContractProperties';
/** @since 2019-12-01 */
export interface TagContract extends Resource {
    /** @since 2019-12-01 */
    properties: TagContractProperties;
}

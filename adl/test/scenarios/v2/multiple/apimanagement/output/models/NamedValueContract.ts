import { Resource } from './Resource';
import { NamedValueContractProperties } from './NamedValueContractProperties';
/** @since 2019-12-01 */
export interface NamedValueContract extends Resource {
    /** @since 2019-12-01 */
    properties: NamedValueContractProperties;
}

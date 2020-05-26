import { Resource } from './Resource';
import { ApiContractProperties } from './ApiContractProperties';
/** @since 2019-12-01 */
export interface ApiContract extends Resource {
    /** @since 2019-12-01 */
    properties: ApiContractProperties;
}

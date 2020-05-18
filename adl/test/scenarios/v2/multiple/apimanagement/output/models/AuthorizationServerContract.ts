import { AuthorizationServerContractProperties } from './AuthorizationServerContractProperties';
import { Resource } from './Resource';
/**
 * @description External OAuth authorization server settings.
 */
export interface AuthorizationServerContract extends Resource {
    /**
     * @description Properties of the External OAuth authorization server Contract.
     */
    properties: AuthorizationServerContractProperties;
}

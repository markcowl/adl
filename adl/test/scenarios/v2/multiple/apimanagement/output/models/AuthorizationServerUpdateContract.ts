import { AuthorizationServerUpdateContractProperties } from './AuthorizationServerUpdateContractProperties';
import { Resource } from './Resource';
/**
 * @description External OAuth authorization server settings.
 */
export interface AuthorizationServerUpdateContract extends Resource {
    /**
     * @description Properties of the External OAuth authorization server update Contract.
     */
    properties: AuthorizationServerUpdateContractProperties;
}

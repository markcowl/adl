import { AuthorizationServerContractBaseProperties } from './AuthorizationServerContractBaseProperties';
import { GrantType } from '../enums/GrantType';
/** @since 2019-12-01 */
export interface AuthorizationServerUpdateContractProperties extends AuthorizationServerContractBaseProperties {
    /** @since 2019-12-01 */
    displayName: string & MaxLength<50> & MinLength<1>;
    /** @since 2019-12-01 */
    clientRegistrationEndpoint: string;
    /** @since 2019-12-01 */
    authorizationEndpoint: string;
    /** @since 2019-12-01 */
    grantTypes: Array<GrantType>;
    /** @since 2019-12-01 */
    clientId: string;
    /** @since 2019-12-01 */
    clientSecret: string;
}

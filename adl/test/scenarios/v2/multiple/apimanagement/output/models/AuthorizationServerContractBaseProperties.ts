import { AuthorizationMethod } from '../enums/AuthorizationMethod';
import { ClientAuthenticationMethod } from '../enums/ClientAuthenticationMethod';
import { TokenBodyParameterContract } from './TokenBodyParameterContract';
import { BearerTokenSendingMethod } from '../enums/BearerTokenSendingMethod';
/** @since 2019-12-01 */
export interface AuthorizationServerContractBaseProperties {
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    authorizationMethods: Array<AuthorizationMethod>;
    /** @since 2019-12-01 */
    clientAuthenticationMethod: Array<ClientAuthenticationMethod>;
    /** @since 2019-12-01 */
    tokenBodyParameters: Array<TokenBodyParameterContract>;
    /** @since 2019-12-01 */
    tokenEndpoint: string;
    /** @since 2019-12-01 */
    supportState: boolean;
    /** @since 2019-12-01 */
    defaultScope: string;
    /** @since 2019-12-01 */
    bearerTokenSendingMethods: Array<BearerTokenSendingMethod>;
    /** @since 2019-12-01 */
    resourceOwnerUsername: string;
    /** @since 2019-12-01 */
    resourceOwnerPassword: string;
}

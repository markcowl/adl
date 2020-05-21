import { IdentityProviderBaseParameters } from './IdentityProviderBaseParameters';
/**
 * @description The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.
 */
export interface IdentityProviderContractProperties extends IdentityProviderBaseParameters {
    /**
     * @description Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
     */
    clientId?: string & MinLength<1>;
    /**
     * @description Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    clientSecret: string & MinLength<1>;
}

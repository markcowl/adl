import { AuthorizationMethod } from '../enums/AuthorizationMethod';
import { BearerTokenSendingMethod } from '../enums/BearerTokenSendingMethod';
import { ClientAuthenticationMethod } from '../enums/ClientAuthenticationMethod';
import { TokenBodyParameterContract } from './TokenBodyParameterContract';
/**
 * @description External OAuth authorization server Update settings contract.
 */
export interface AuthorizationServerContractBaseProperties {
    /**
     * @description Description of the authorization server. Can contain HTML formatting tags.
     */
    description: string;
    /**
     * @description HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
     */
    authorizationMethods: Array<AuthorizationMethod>;
    /**
     * @description Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
     */
    clientAuthenticationMethod: Array<ClientAuthenticationMethod>;
    /**
     * @description Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
     */
    tokenBodyParameters: Array<TokenBodyParameterContract>;
    /**
     * @description OAuth token endpoint. Contains absolute URI to entity being referenced.
     */
    tokenEndpoint: string;
    /**
     * @description If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
     */
    supportState: boolean;
    /**
     * @description Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
     */
    defaultScope: string;
    /**
     * @description Specifies the mechanism by which access token is passed to the API.
     */
    bearerTokenSendingMethods: Array<BearerTokenSendingMethod>;
    /**
     * @description Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     */
    resourceOwnerUsername: string;
    /**
     * @description Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     */
    resourceOwnerPassword: string;
}

import { AuthorizationServerContractBaseProperties } from './AuthorizationServerContractBaseProperties';
/**
 * @description External OAuth authorization server settings Properties.
 */
export interface AuthorizationServerContractProperties extends AuthorizationServerContractBaseProperties {
    /**
     * @description User-friendly authorization server name.
     */
    displayName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
     */
    clientRegistrationEndpoint?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
     */
    authorizationEndpoint?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Form of an authorization grant, which the client uses to request the access token.
     */
    grantTypes?: unknown /*= (not tsschema -- undefinedgrantTypes/undefined ) =*/;
    /**
     * @description Client or app id registered with this authorization server.
     */
    clientId?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    clientSecret: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

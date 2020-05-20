
/**
 * @description External OAuth authorization server Update settings contract.
 */
export interface AuthorizationServerContractBaseProperties {
    /**
     * @description Description of the authorization server. Can contain HTML formatting tags.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
     */
    authorizationMethods: unknown /*= (not tsschema -- undefinedauthorizationMethods/undefined ) =*/;
    /**
     * @description Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
     */
    clientAuthenticationMethod: unknown /*= (not tsschema -- undefinedclientAuthenticationMethod/undefined ) =*/;
    /**
     * @description Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
     */
    tokenBodyParameters: unknown /*= (not tsschema -- undefinedtokenBodyParameters/undefined ) =*/;
    /**
     * @description OAuth token endpoint. Contains absolute URI to entity being referenced.
     */
    tokenEndpoint: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
     */
    supportState: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
     */
    defaultScope: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Specifies the mechanism by which access token is passed to the API.
     */
    bearerTokenSendingMethods: unknown /*= (not tsschema -- undefinedbearerTokenSendingMethods/undefined ) =*/;
    /**
     * @description Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     */
    resourceOwnerUsername: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     */
    resourceOwnerPassword: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}


/**
 * @description OpenID Connect Providers Contract.
 */
export interface OpenidConnectProviderContractProperties {
    /**
     * @description User-friendly OpenID Connect Provider name.
     */
    displayName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description User-friendly description of OpenID Connect Provider.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Metadata endpoint URI.
     */
    metadataEndpoint?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Client ID of developer console which is the client application.
     */
    clientId?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Client Secret of developer console which is the client application.
     */
    clientSecret: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

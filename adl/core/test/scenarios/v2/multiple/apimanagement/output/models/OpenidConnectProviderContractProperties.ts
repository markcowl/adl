
/**
 * 
 * @description OpenID Connect Providers Contract.
 */
export interface OpenidConnectProviderContractProperties {
    /**
     * 
     * @description User-friendly OpenID Connect Provider name.
     */
    displayName?: any;
    /**
     * 
     * @description User-friendly description of OpenID Connect Provider.
     */
    description: any;
    /**
     * 
     * @description Metadata endpoint URI.
     */
    metadataEndpoint?: any;
    /**
     * 
     * @description Client ID of developer console which is the client application.
     */
    clientId?: any;
    /**
     * 
     * @description Client Secret of developer console which is the client application.
     */
    clientSecret: any;
}

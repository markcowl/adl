
/**
 * @description Parameters supplied to the Update OpenID Connect Provider operation.
 */
export interface OpenidConnectProviderUpdateContractProperties {
    /**
     * @description User-friendly OpenID Connect Provider name.
     */
    displayName: string & MaxLength<50>;
    /**
     * @description User-friendly description of OpenID Connect Provider.
     */
    description: string;
    /**
     * @description Metadata endpoint URI.
     */
    metadataEndpoint: string;
    /**
     * @description Client ID of developer console which is the client application.
     */
    clientId: string;
    /**
     * @description Client Secret of developer console which is the client application.
     */
    clientSecret: string;
}

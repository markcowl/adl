import { OpenidConnectProviderContract } from './OpenidConnectProviderContract';
/**
 * @description Paged OpenIdProviders list representation.
 */
export interface OpenIdConnectProviderCollection {
    /**
     * @description Page values.
     */
    value: Array<OpenidConnectProviderContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

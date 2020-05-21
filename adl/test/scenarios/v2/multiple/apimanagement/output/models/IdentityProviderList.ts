import { IdentityProviderContract } from './IdentityProviderContract';
/**
 * @description List of all the Identity Providers configured on the service instance.
 */
export interface IdentityProviderList {
    /**
     * @description Identity Provider configuration values.
     */
    value: Array<IdentityProviderContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

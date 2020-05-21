import { AuthorizationServerContract } from './AuthorizationServerContract';
/**
 * @description Paged OAuth2 Authorization Servers list representation.
 */
export interface AuthorizationServerCollection {
    /**
     * @description Page values.
     */
    value: Array<AuthorizationServerContract>;
    /**
     * @description Total record count number across all pages.
     */
    count: int64;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

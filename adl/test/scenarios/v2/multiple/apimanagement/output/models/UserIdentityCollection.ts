import { UserIdentityContract } from './UserIdentityContract';
/**
 * @description List of Users Identity list representation.
 */
export interface UserIdentityCollection {
    /**
     * @description User Identity values.
     */
    value: Array<UserIdentityContract>;
    /**
     * @description Total record count number across all pages.
     */
    count: int64;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

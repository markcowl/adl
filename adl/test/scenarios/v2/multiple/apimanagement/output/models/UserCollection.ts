import { UserContract } from './UserContract';
/**
 * @description Paged Users list representation.
 */
export interface UserCollection {
    /**
     * @description Page values.
     */
    value: Array<UserContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

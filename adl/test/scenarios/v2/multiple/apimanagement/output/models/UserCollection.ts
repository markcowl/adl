import { UserContract } from './UserContract';
/** @since 2019-12-01 */
export interface UserCollection {
    /** @since 2019-12-01 */
    value: Array<UserContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}

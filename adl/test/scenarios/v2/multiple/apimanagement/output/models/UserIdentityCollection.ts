import { UserIdentityContract } from './UserIdentityContract';
/** @since 2019-12-01 */
export interface UserIdentityCollection {
    /** @since 2019-12-01 */
    value: Array<UserIdentityContract>;
    /** @since 2019-12-01 */
    count: int64;
    /** @since 2019-12-01 */
    nextLink: string;
}

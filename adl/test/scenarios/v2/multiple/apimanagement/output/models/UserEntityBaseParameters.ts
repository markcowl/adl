import { UserIdentityContract } from './UserIdentityContract';
/** @since 2019-12-01 */
export interface UserEntityBaseParameters {
    /** @since 2019-12-01 */
    state: UserState;
    /** @since 2019-12-01 */
    note: string;
    /** @since 2019-12-01 */
    identities: Array<UserIdentityContract>;
}

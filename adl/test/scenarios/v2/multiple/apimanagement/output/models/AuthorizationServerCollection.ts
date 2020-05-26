import { AuthorizationServerContract } from './AuthorizationServerContract';
/** @since 2019-12-01 */
export interface AuthorizationServerCollection {
    /** @since 2019-12-01 */
    value: Array<AuthorizationServerContract>;
    /** @since 2019-12-01 */
    count: int64;
    /** @since 2019-12-01 */
    nextLink: string;
}

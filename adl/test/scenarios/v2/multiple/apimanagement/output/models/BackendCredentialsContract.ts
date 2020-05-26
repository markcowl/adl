import { BackendAuthorizationHeaderCredentials } from './BackendAuthorizationHeaderCredentials';
/** @since 2019-12-01 */
export interface BackendCredentialsContract {
    /** @since 2019-12-01 */
    certificate: Array<string> & MaximumElements<32>;
    /** @since 2019-12-01 */
    query: Dictionary<Array<string>>;
    /** @since 2019-12-01 */
    header: Dictionary<Array<string>>;
    /** @since 2019-12-01 */
    authorization: BackendAuthorizationHeaderCredentials;
}

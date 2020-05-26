import { BackendProperties } from './BackendProperties';
import { BackendCredentialsContract } from './BackendCredentialsContract';
import { BackendProxyContract } from './BackendProxyContract';
import { BackendTlsProperties } from './BackendTlsProperties';
/** @since 2019-12-01 */
export interface BackendBaseParameters {
    /** @since 2019-12-01 */
    title: string & MaxLength<300> & MinLength<1>;
    /** @since 2019-12-01 */
    description: string & MaxLength<2000> & MinLength<1>;
    /** @since 2019-12-01 */
    resourceId: string & MaxLength<2000> & MinLength<1>;
    /** @since 2019-12-01 */
    properties: BackendProperties;
    /** @since 2019-12-01 */
    credentials: BackendCredentialsContract;
    /** @since 2019-12-01 */
    proxy: BackendProxyContract;
    /** @since 2019-12-01 */
    tls: BackendTlsProperties;
}

import { BackendProperties } from './BackendProperties';
import { BackendCredentialsContract } from './BackendCredentialsContract';
import { BackendProxyContract } from './BackendProxyContract';
import { BackendTlsProperties } from './BackendTlsProperties';
/**
 * @description Backend entity base Parameter set.
 */
export interface BackendBaseParameters {
    /**
     * @description Backend Title.
     */
    title: string & MaxLength<300> & MinLength<1>;
    /**
     * @description Backend Description.
     */
    description: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     */
    resourceId: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Backend Properties contract
     */
    properties: BackendProperties;
    /**
     * @description Backend Credentials Contract Properties
     */
    credentials: BackendCredentialsContract;
    /**
     * @description Backend Proxy Contract Properties
     */
    proxy: BackendProxyContract;
    /**
     * @description Backend TLS Properties
     */
    tls: BackendTlsProperties;
}

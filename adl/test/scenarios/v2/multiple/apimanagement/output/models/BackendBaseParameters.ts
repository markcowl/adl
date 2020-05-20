import { BackendCredentialsContract } from './BackendCredentialsContract';
import { BackendProperties } from './BackendProperties';
import { BackendProxyContract } from './BackendProxyContract';
import { BackendTlsProperties } from './BackendTlsProperties';
/**
 * @description Backend entity base Parameter set.
 */
export interface BackendBaseParameters {
    /**
     * @description Backend Title.
     */
    title: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Backend Description.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     */
    resourceId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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

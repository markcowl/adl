import { PrivateEndpointConnectionProvisioningState } from '../PrivateEndpointConnectionProvisioningState';
import { PrivateEndpoint } from './PrivateEndpoint';
import { PrivateLinkServiceConnectionState } from './PrivateLinkServiceConnectionState';
/**
 * @description Properties of the private endpoint connection resource.
 */
export interface PrivateEndpointConnectionProperties {
    /**
     * @description Properties of the private endpoint object.
     */
    privateEndpoint: PrivateEndpoint;
    /**
     * @description Approval state of the private link connection.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
    /**
     * @description Provisioning state of the private endpoint connection.
     */
    provisioningState: PrivateEndpointConnectionProvisioningState;
}

import { PrivateEndpoint } from './PrivateEndpoint';
import { PrivateLinkServiceConnectionState } from './PrivateLinkServiceConnectionState';
/** @since 2019-09-01 */
export interface PrivateEndpointConnectionProperties {
    /** @since 2019-09-01 */
    privateEndpoint: PrivateEndpoint;
    /** @since 2019-09-01 */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
    /** @since 2019-09-01 */
    provisioningState: PrivateEndpointConnectionProvisioningState;
}

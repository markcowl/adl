import { PrivateEndpointServiceConnectionStatus } from '../enums/PrivateEndpointServiceConnectionStatus';
/**
 * @description An object that represents the approval state of the private link connection.
 */
export interface PrivateLinkServiceConnectionState {
    /**
     * @description Indicates whether the connection has been approved, rejected or removed by the key vault owner.
     */
    status: PrivateEndpointServiceConnectionStatus;
    /**
     * @description The reason for approval or rejection.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionRequired: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

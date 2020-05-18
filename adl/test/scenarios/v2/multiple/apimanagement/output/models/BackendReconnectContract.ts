import { BackendReconnectProperties } from './BackendReconnectProperties';
import { Resource } from './Resource';
/**
 * @description Reconnect request parameters.
 */
export interface BackendReconnectContract extends Resource {
    /**
     * @description Reconnect request properties.
     */
    properties: BackendReconnectProperties;
}

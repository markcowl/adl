import { Resource } from './Resource';
import { BackendReconnectProperties } from './BackendReconnectProperties';
/**
 * 
 * @description Reconnect request parameters.
 */
export interface BackendReconnectContract extends Resource {
    /**
     * 
     * @description Reconnect request properties.
     */
    properties: BackendReconnectProperties;
}

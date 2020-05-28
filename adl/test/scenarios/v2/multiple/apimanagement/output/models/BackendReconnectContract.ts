import { Resource } from './Resource';
import { BackendReconnectProperties } from './BackendReconnectProperties';
/**
 * @description Reconnect request parameters.
 * @since 2019-12-01
 */
export interface BackendReconnectContract extends Resource {
    /**
     * @description Reconnect request properties.
     * @since 2019-12-01
     */
    properties: BackendReconnectProperties;
}

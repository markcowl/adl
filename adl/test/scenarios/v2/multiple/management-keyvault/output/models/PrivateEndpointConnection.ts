import { Resource } from './Resource';
import { PrivateEndpointConnectionProperties } from './PrivateEndpointConnectionProperties';
/**
 * @description Private endpoint connection resource.
 */
export interface PrivateEndpointConnection extends Resource {
    /**
     * @description Resource properties.
     */
    properties: PrivateEndpointConnectionProperties;
}

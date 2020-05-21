import { PrivateEndpointConnectionProperties } from './PrivateEndpointConnectionProperties';
import { Resource } from './Resource';
/**
 * @description Private endpoint connection resource.
 */
export interface PrivateEndpointConnection extends Resource {
    /**
     * @description Resource properties.
     */
    properties: PrivateEndpointConnectionProperties;
}

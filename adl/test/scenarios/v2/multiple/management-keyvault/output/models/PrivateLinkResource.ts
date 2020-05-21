import { PrivateLinkResourceProperties } from './PrivateLinkResourceProperties';
import { Resource } from './Resource';
/**
 * @description A private link resource
 */
export interface PrivateLinkResource extends Resource {
    /**
     * @description Resource properties.
     */
    properties: PrivateLinkResourceProperties;
}

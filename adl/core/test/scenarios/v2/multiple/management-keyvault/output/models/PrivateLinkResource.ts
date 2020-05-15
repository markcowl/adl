import { Resource } from './Resource';
import { PrivateLinkResourceProperties } from './PrivateLinkResourceProperties';
/**
 * 
 * @description A private link resource
 */
export interface PrivateLinkResource extends Resource {
    /**
     * 
     * @description Resource properties.
     */
    properties: PrivateLinkResourceProperties;
}

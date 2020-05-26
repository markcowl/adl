import { Resource } from './Resource';
import { PrivateLinkResourceProperties } from './PrivateLinkResourceProperties';
/** @since 2019-09-01 */
export interface PrivateLinkResource extends Resource {
    /** @since 2019-09-01 */
    properties: PrivateLinkResourceProperties;
}

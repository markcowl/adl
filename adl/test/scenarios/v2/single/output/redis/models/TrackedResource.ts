import { Resource } from "./Resource";
/**
 * @description The resource model definition for a ARM tracked top level resource
 * @since 2018-03-01
 */
export interface TrackedResource extends Resource {
    /**
     * @description Resource tags.
     * @since 2018-03-01
     */
    tags?: Dictionary<string>;
    /**
     * @description The geo-location where the resource lives
     * @since 2018-03-01
     */
    location: string;
}

import { geo } from './geo';
import { air6_properties } from './air6_properties';
/** @since 0.0.0 */
export interface air6_Feature {
    /**
     * @since 0.0.0
     */
    geometry?: geo;
    /**
     * @since 0.0.0
     */
    properties?: air6_properties;
    /** @since 0.0.0 */
    type?: string;
}

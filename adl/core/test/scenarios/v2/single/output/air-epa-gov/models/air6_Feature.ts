import { geo } from './geo';
import { air6_properties } from './air6_properties';
/**
 * 
 * @description GeoJSON Feature Object
 */
export interface air6_Feature {
    geometry?: geo;
    properties?: air6_properties;
    /**
     * 
     * @description Static marker indicating object is a GeoJSON Feature.
     */
    type?: any;
}

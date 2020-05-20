import { PlaceType } from '../enums/PlaceType';
import { Geo } from './Geo';
export interface Place {
    contained_within: unknown /*= (not tsschema -- undefinedcontained_within/undefined ) =*/;
    country: string;
    country_code: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    full_name?: string;
    geo: Geo;
    id?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The human readable name of this place.
     */
    name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    place_type: PlaceType;
}

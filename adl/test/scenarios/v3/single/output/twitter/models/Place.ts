import { PlaceType } from '../PlaceType';
import { Geo } from './Geo';
export interface Place {
    contained_within: any;
    country: any;
    country_code: any;
    full_name?: any;
    geo: Geo;
    id?: any;
    /**
     * @description The human readable name of this place.
     */
    name: any;
    place_type: PlaceType;
}

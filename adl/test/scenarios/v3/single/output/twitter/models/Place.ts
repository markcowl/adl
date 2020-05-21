import { Geo } from './Geo';
export interface Place {
    contained_within: Array<string> & MinimumElements<1>;
    country: string;
    country_code: string & RegularExpression<"^[A-Z]{2}$">;
    full_name?: string;
    geo: Geo;
    id?: string;
    /**
     * @description The human readable name of this place.
     */
    name: string;
    place_type: PlaceType;
}

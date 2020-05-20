
/**
 * @description GeoJSON Geometry Object
 */
export interface geo {
    /**
     * @description Array of coordinate values in longitude, latitude format.
     */
    coordinates?: unknown /*= (not tsschema -- undefinedcoordinates/undefined ) =*/;
    /**
     * @description Indicator of the geometry represented in the GeoJSON Feature, for Echo will always be "Point".
     */
    type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

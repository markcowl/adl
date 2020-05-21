
/**
 * @description A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
 */
export interface Point {
    coordinates?: Array<double> & MaximumElements<2> & MinimumElements<2>;
    type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

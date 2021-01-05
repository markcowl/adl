
/**
 *
 * @description A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.
 */
export type Position = Array<double> & MaximumElements<2> & MinimumElements<2>;

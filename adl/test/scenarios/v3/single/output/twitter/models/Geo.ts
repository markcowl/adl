import { Point } from './Point';
export interface Geo {
    bbox?: Array<double & Minimum<-180> & Maximum<180>> & MaximumElements<4> & MinimumElements<4>;
    geometry: Point;
    properties?: {};
    type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

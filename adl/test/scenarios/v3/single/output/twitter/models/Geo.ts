import { Point } from './Point';
export interface Geo {
    bbox?: unknown /*= (not tsschema -- undefinedbbox/undefined ) =*/;
    geometry: Point;
    properties?: {};
    type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

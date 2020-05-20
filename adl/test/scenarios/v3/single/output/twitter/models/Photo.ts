import { CommonMediaFields } from './CommonMediaFields';
export interface Photo extends CommonMediaFields {
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
}

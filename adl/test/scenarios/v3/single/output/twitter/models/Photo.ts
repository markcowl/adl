import { CommonMediaFields } from './CommonMediaFields';
export interface Photo extends CommonMediaFields {
    type: "photo";
    url: string;
}

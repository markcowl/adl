import { CommonMediaFields } from './CommonMediaFields';
export interface Video extends CommonMediaFields {
    duration_ms: int64;
    preview_image_url: string;
    type: "video";
}

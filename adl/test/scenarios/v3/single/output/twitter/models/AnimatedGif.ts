import { CommonMediaFields } from './CommonMediaFields';
export interface AnimatedGif extends CommonMediaFields {
    preview_image_url: string;
    type: "animated_gif";
}

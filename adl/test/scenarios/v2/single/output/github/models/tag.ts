import { object_168 } from './object_168';
import { object_169 } from './object_169';
export interface tag {
    /**
     * @description String of the tag message.
     */
    message: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    object: object_168;
    sha: string;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    tagger: object_169;
    url: string;
}

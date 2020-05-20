import { object_170 } from './object_170';
export interface tagBody {
    /**
     * @description String of the tag message.
     */
    message?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description String of the SHA of the git object this is tagging.
     */
    object?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    tagger?: object_170;
    /**
     * @description String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
     */
    type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

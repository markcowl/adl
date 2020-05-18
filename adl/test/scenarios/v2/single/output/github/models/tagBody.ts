import { object_182 } from '../anonymous';
export interface tagBody {
    /**
     * @description String of the tag message.
     */
    message?: any;
    /**
     * @description String of the SHA of the git object this is tagging.
     */
    object?: any;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag?: any;
    tagger?: object_182;
    /**
     * @description String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
     */
    type?: any;
}

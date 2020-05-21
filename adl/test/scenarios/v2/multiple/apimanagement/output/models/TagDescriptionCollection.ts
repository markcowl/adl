import { TagDescriptionContract } from './TagDescriptionContract';
/**
 * @description Paged TagDescription list representation.
 */
export interface TagDescriptionCollection {
    /**
     * @description Page values.
     */
    value: Array<TagDescriptionContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

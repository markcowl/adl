import { TagContract } from './TagContract';
/**
 * @description Paged Tag list representation.
 */
export interface TagCollection {
    /**
     * @description Page values.
     */
    value: Array<TagContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

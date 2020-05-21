import { TagResourceContract } from './TagResourceContract';
/**
 * @description Paged Tag list representation.
 */
export interface TagResourceCollection {
    /**
     * @description Page values.
     */
    value: Array<TagResourceContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

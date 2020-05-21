import { GroupContract } from './GroupContract';
/**
 * @description Paged Group list representation.
 */
export interface GroupCollection {
    /**
     * @description Page values.
     */
    value: Array<GroupContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

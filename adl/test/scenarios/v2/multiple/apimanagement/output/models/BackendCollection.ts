import { BackendContract } from './BackendContract';
/**
 * @description Paged Backend list representation.
 */
export interface BackendCollection {
    /**
     * @description Backend values.
     */
    value: Array<BackendContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

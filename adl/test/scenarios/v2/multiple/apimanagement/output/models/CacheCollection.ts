import { CacheContract } from './CacheContract';
/**
 * @description Paged Caches list representation.
 */
export interface CacheCollection {
    /**
     * @description Page values.
     */
    value: Array<CacheContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

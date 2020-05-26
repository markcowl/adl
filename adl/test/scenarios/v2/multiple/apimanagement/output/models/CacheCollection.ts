import { CacheContract } from './CacheContract';
/** @since 2019-12-01 */
export interface CacheCollection {
    /** @since 2019-12-01 */
    value: Array<CacheContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}

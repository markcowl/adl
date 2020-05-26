import { RegionContract } from './RegionContract';
/** @since 2019-12-01 */
export interface RegionListResult {
    /** @since 2019-12-01 */
    value: Array<RegionContract>;
    /** @since 2019-12-01 */
    count: int64;
    /** @since 2019-12-01 */
    nextLink: string;
}

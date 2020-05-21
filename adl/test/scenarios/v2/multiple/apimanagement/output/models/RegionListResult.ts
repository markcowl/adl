import { RegionContract } from './RegionContract';
/**
 * @description Lists Regions operation response details.
 */
export interface RegionListResult {
    /**
     * @description Lists of Regions.
     */
    value: Array<RegionContract>;
    /**
     * @description Total record count number across all pages.
     */
    count: int64;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}

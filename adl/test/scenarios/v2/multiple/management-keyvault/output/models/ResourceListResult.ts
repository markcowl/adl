import { Resource } from './Resource';
/** @since 2019-09-01 */
export interface ResourceListResult {
    /** @since 2019-09-01 */
    value: Array<Resource>;
    /** @since 2019-09-01 */
    nextLink: string;
}

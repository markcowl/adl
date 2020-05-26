import { BackendContract } from './BackendContract';
/** @since 2019-12-01 */
export interface BackendCollection {
    /** @since 2019-12-01 */
    value: Array<BackendContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}

import { PolicyContract } from './PolicyContract';
/** @since 2019-12-01 */
export interface PolicyCollection {
    /** @since 2019-12-01 */
    value: Array<PolicyContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}

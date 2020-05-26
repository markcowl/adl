import { Operation } from './Operation';
/** @since 2019-09-01 */
export interface OperationListResult {
    /** @since 2019-09-01 */
    value: Array<Operation>;
    /** @since 2019-09-01 */
    nextLink: string;
}

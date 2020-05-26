import { ErrorResponseBody } from './ErrorResponseBody';
import { OperationResultLogItemContract } from './OperationResultLogItemContract';
/** @since 2019-12-01 */
export interface OperationResultContract {
    /** @since 2019-12-01 */
    id: string;
    /** @since 2019-12-01 */
    status: AsyncOperationStatus;
    /** @since 2019-12-01 */
    started: dateTime;
    /** @since 2019-12-01 */
    updated: dateTime;
    /** @since 2019-12-01 */
    resultInfo: string;
    /** @since 2019-12-01 */
    error: ErrorResponseBody;
    /** @since 2019-12-01 */
    readonly actionLog: Array<OperationResultLogItemContract> & ;
}

import { ErrorFieldContract } from './ErrorFieldContract';
/** @since 2019-12-01 */
export interface ErrorResponseBody {
    /** @since 2019-12-01 */
    code: string;
    /** @since 2019-12-01 */
    message: string;
    /** @since 2019-12-01 */
    details: Array<ErrorFieldContract>;
}

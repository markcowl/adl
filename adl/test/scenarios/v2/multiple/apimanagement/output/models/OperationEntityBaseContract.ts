import { ParameterContract } from './ParameterContract';
import { RequestContract } from './RequestContract';
import { ResponseContract } from './ResponseContract';
/** @since 2019-12-01 */
export interface OperationEntityBaseContract {
    /** @since 2019-12-01 */
    templateParameters: Array<ParameterContract>;
    /** @since 2019-12-01 */
    description: string & MaxLength<1000>;
    /** @since 2019-12-01 */
    request: RequestContract;
    /** @since 2019-12-01 */
    responses: Array<ResponseContract>;
    /** @since 2019-12-01 */
    policies: string;
}

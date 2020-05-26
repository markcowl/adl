import { RepresentationContract } from './RepresentationContract';
import { ParameterContract } from './ParameterContract';
/** @since 2019-12-01 */
export interface ResponseContract {
    /** @since 2019-12-01 */
    statusCode?: int32;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    representations: Array<RepresentationContract>;
    /** @since 2019-12-01 */
    headers: Array<ParameterContract>;
}

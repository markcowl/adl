import { ParameterContract } from './ParameterContract';
import { RepresentationContract } from './RepresentationContract';
/** @since 2019-12-01 */
export interface RequestContract {
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    queryParameters: Array<ParameterContract>;
    /** @since 2019-12-01 */
    headers: Array<ParameterContract>;
    /** @since 2019-12-01 */
    representations: Array<RepresentationContract>;
}

import { ParameterContract } from './ParameterContract';
/** @since 2019-12-01 */
export interface RepresentationContract {
    /** @since 2019-12-01 */
    contentType?: string;
    /** @since 2019-12-01 */
    sample: string;
    /** @since 2019-12-01 */
    schemaId: string;
    /** @since 2019-12-01 */
    typeName: string;
    /** @since 2019-12-01 */
    formParameters: Array<ParameterContract>;
}

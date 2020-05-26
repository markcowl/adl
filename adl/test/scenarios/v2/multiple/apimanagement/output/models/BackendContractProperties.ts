import { BackendBaseParameters } from './BackendBaseParameters';
/** @since 2019-12-01 */
export interface BackendContractProperties extends BackendBaseParameters {
    /** @since 2019-12-01 */
    url?: string & MaxLength<2000> & MinLength<1>;
    /** @since 2019-12-01 */
    protocol?: BackendProtocol;
}

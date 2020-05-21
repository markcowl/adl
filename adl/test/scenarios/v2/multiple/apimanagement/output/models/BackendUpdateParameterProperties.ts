import { BackendBaseParameters } from './BackendBaseParameters';
/**
 * @description Parameters supplied to the Update Backend operation.
 */
export interface BackendUpdateParameterProperties extends BackendBaseParameters {
    /**
     * @description Runtime Url of the Backend.
     */
    url: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Backend communication protocol.
     */
    protocol: BackendProtocol;
}

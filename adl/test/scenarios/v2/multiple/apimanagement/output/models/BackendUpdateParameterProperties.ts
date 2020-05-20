import { BackendProtocol } from '../BackendProtocol';
import { BackendBaseParameters } from './BackendBaseParameters';
/**
 * @description Parameters supplied to the Update Backend operation.
 */
export interface BackendUpdateParameterProperties extends BackendBaseParameters {
    /**
     * @description Runtime Url of the Backend.
     */
    url: any;
    /**
     * @description Backend communication protocol.
     */
    protocol: BackendProtocol;
}

import { BackendProtocol } from '../enums/BackendProtocol';
import { BackendBaseParameters } from './BackendBaseParameters';
/**
 * @description Parameters supplied to the Create Backend operation.
 */
export interface BackendContractProperties extends BackendBaseParameters {
    /**
     * @description Runtime Url of the Backend.
     */
    url?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Backend communication protocol.
     */
    protocol?: BackendProtocol;
}

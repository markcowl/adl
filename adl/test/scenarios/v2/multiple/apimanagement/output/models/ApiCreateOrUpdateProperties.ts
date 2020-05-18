import { object_187 } from '../anonymous';
import { ApiContractProperties } from './ApiContractProperties';
/**
 * @description Api Create or Update Properties.
 */
export interface ApiCreateOrUpdateProperties extends ApiContractProperties {
    /**
     * @description Content value when Importing an API.
     */
    value: any;
    /**
     * @description Format of the Content in which the API is getting imported.
     */
    format: ContentFormat;
    /**
     * @description Criteria to limit import of WSDL to a subset of the document.
     */
    wsdlSelector: object_187;
    /**
     * @description Type of Api to create.
     *  * `http` creates a SOAP to REST API
     *  * `soap` creates a SOAP pass-through API .
     * @clientName SoapApiType
     */
    apiType: SoapApiType;
}

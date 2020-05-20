import { ContentFormat } from '../enums/ContentFormat';
import { SoapApiType } from '../enums/SoapApiType';
import { ApiContractProperties } from './ApiContractProperties';
/**
 * @description Api Create or Update Properties.
 */
export interface ApiCreateOrUpdateProperties extends ApiContractProperties {
    /**
     * @description Content value when Importing an API.
     */
    value: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Format of the Content in which the API is getting imported.
     */
    format: ContentFormat;
    /**
     * @description Criteria to limit import of WSDL to a subset of the document.
     */
    wsdlSelector: {
        /**
         * @description Name of service to import from WSDL
         */
        wsdlServiceName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description Name of endpoint(port) to import from WSDL
         */
        wsdlEndpointName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    };
    /**
     * @description Type of Api to create.
     *  * `http` creates a SOAP to REST API
     *  * `soap` creates a SOAP pass-through API .
     * @clientName SoapApiType
     */
    apiType: SoapApiType;
}

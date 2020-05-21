
/**
 * @description Criteria to limit import of WSDL to a subset of the document.
 */
export interface model_86 {
    /**
     * @description Name of service to import from WSDL
     */
    wsdlServiceName: string;
    /**
     * @description Name of endpoint(port) to import from WSDL
     */
    wsdlEndpointName: string;
}

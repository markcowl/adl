
/**
 * @description Criteria to limit import of WSDL to a subset of the document.
 */
export interface object_187 {
    /**
     * @description Name of service to import from WSDL
     */
    wsdlServiceName: any;
    /**
     * @description Name of endpoint(port) to import from WSDL
     */
    wsdlEndpointName: any;
}
/**
 * @description The object defining the schema of the exported Api Detail
 */
export interface object_188 {
    /**
     * @description Link to the Storage Blob containing the result of the export operation. The Blob Uri is only valid for 5 minutes.
     */
    link: any;
}
/**
 * @description Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
 */
export interface object_189 {
}
/**
 * @description Association entity contract properties.
 */
export interface object_190 {
    /**
     * @description Provisioning state.
     */
    provisioningState: ProvisioningState;
}

import { ProvisioningState } from './enums/ProvisioningState';
/**
 * @description Criteria to limit import of WSDL to a subset of the document.
 */
export interface object_175 {
    /**
     * @description Name of service to import from WSDL
     */
    wsdlServiceName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of endpoint(port) to import from WSDL
     */
    wsdlEndpointName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
/**
 * @description The object defining the schema of the exported Api Detail
 */
export interface object_176 {
    /**
     * @description Link to the Storage Blob containing the result of the export operation. The Blob Uri is only valid for 5 minutes.
     */
    link: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
/**
 * @description Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
 */
export interface object_177 {
}
/**
 * @description Association entity contract properties.
 */
export interface object_178 {
    /**
     * @description Provisioning state.
     */
    provisioningState: ProvisioningState;
}

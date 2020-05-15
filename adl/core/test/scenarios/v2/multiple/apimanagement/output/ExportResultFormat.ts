
/**
 * 
 * @description Format in which the Api Details are exported to the Storage Blob with Sas Key valid for 5 minutes.
 * @extensible
 */
export enum ExportResultFormat {
    /** The Api Definition is exported in OpenApi Specification 2.0 format to the Storage Blob. */
    Swagger = 'swagger-link-json',
    /** The Api Definition is exported in WSDL Schema to Storage Blob. This is only supported for APIs of Type `soap` */
    Wsdl = 'wsdl-link+xml',
    /** Export the Api Definition in WADL Schema to Storage Blob. */
    Wadl = 'wadl-link-json',
    /** Export the Api Definition in OpenApi Specification 3.0 to Storage Blob. */
    OpenApi = 'openapi-link'
}

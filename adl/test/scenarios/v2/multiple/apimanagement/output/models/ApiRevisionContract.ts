
/**
 * @description Summary of revision metadata.
 */
export interface ApiRevisionContract {
    /**
     * @description Identifier of the API Revision.
     */
    readonly apiId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Revision number of API.
     */
    readonly apiRevision: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The time the API Revision was created. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly createdDateTime: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The time the API Revision were updated. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly updatedDateTime: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Description of the API Revision.
     */
    readonly description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Gateway URL for accessing the non-current API Revision.
     */
    readonly privateUrl: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicates if API revision is the current api revision.
     */
    readonly isOnline: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicates if API revision is accessible via the gateway.
     */
    readonly isCurrent: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}


/**
 * @description Summary of revision metadata.
 */
export interface ApiRevisionContract {
    /**
     * @description Identifier of the API Revision.
     */
    readonly apiId: any;
    /**
     * @description Revision number of API.
     */
    readonly apiRevision: any;
    /**
     * @description The time the API Revision was created. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly createdDateTime: any;
    /**
     * @description The time the API Revision were updated. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly updatedDateTime: any;
    /**
     * @description Description of the API Revision.
     */
    readonly description: any;
    /**
     * @description Gateway URL for accessing the non-current API Revision.
     */
    readonly privateUrl: any;
    /**
     * @description Indicates if API revision is the current api revision.
     */
    readonly isOnline: any;
    /**
     * @description Indicates if API revision is accessible via the gateway.
     */
    readonly isCurrent: any;
}

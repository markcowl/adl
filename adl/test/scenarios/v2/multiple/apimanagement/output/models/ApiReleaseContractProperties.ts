
/**
 * @description API Release details
 */
export interface ApiReleaseContractProperties {
    /**
     * @description Identifier of the API the release belongs to.
     */
    apiId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly createdDateTime: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The time the API release was updated.
     */
    readonly updatedDateTime: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Release Notes
     */
    notes: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}


/**
 * @description Operation request/response representation details.
 */
export interface RepresentationContract {
    /**
     * @description Specifies a registered or custom content type for this representation, e.g. application/xml.
     */
    contentType?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description An example of the representation.
     */
    sample: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
     */
    schemaId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
     */
    typeName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
     */
    formParameters: unknown /*= (not tsschema -- undefinedformParameters/undefined ) =*/;
}

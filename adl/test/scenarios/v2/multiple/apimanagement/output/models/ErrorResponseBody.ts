
/**
 * @description Error Body contract.
 */
export interface ErrorResponseBody {
    /**
     * @description Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
     */
    code: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Human-readable representation of the error.
     */
    message: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The list of invalid fields send in request, in case of validation error.
     */
    details: unknown /*= (not tsschema -- undefineddetails/undefined ) =*/;
}


/**
 * @description Error Body contract.
 */
export interface ErrorResponseBody {
    /**
     * @description Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
     */
    code: any;
    /**
     * @description Human-readable representation of the error.
     */
    message: any;
    /**
     * @description The list of invalid fields send in request, in case of validation error.
     */
    details: any;
}

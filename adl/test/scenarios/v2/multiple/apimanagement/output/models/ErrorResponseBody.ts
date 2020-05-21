import { ErrorFieldContract } from './ErrorFieldContract';
/**
 * @description Error Body contract.
 */
export interface ErrorResponseBody {
    /**
     * @description Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
     */
    code: string;
    /**
     * @description Human-readable representation of the error.
     */
    message: string;
    /**
     * @description The list of invalid fields send in request, in case of validation error.
     */
    details: Array<ErrorFieldContract>;
}

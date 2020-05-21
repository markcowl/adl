
/**
 * @description Error Field contract.
 */
export interface ErrorFieldContract {
    /**
     * @description Property level error code.
     */
    code: string;
    /**
     * @description Human-readable representation of property-level error.
     */
    message: string;
    /**
     * @description Property name.
     */
    target: string;
}

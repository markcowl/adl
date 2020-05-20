
/**
 * @description Error Field contract.
 */
export interface ErrorFieldContract {
    /**
     * @description Property level error code.
     */
    code: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Human-readable representation of property-level error.
     */
    message: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Property name.
     */
    target: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}


/**
 * @description An error response from Key Vault resource provider
 */
export interface CloudErrorBody {
    /**
     * @description Error code. This is a mnemonic that can be consumed programmatically.
     */
    code: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description User friendly error message. The message is typically localized and may vary with service version.
     */
    message: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}


/**
 * @description Key Vault resource
 */
export interface Resource {
    /**
     * @description Fully qualified identifier of the key vault resource.
     */
    readonly id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of the key vault resource.
     */
    readonly name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Resource type of the key vault resource.
     */
    readonly type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Azure location of the key vault resource.
     */
    readonly location: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Tags assigned to the key vault resource.
     */
    readonly tags: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

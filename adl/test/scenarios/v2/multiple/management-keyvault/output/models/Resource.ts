
/**
 * @description Key Vault resource
 */
export interface Resource {
    /**
     * @description Fully qualified identifier of the key vault resource.
     */
    readonly id: any;
    /**
     * @description Name of the key vault resource.
     */
    readonly name: any;
    /**
     * @description Resource type of the key vault resource.
     */
    readonly type: any;
    /**
     * @description Azure location of the key vault resource.
     */
    readonly location: any;
    /**
     * @description Tags assigned to the key vault resource.
     */
    readonly tags: any;
}

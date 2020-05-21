
/**
 * @description Key Vault resource
 */
export interface Resource {
    /**
     * @description Fully qualified identifier of the key vault resource.
     */
    readonly id: string & ;
    /**
     * @description Name of the key vault resource.
     */
    readonly name: string & ;
    /**
     * @description Resource type of the key vault resource.
     */
    readonly type: string & ;
    /**
     * @description Azure location of the key vault resource.
     */
    readonly location: string & ;
    /**
     * @description Tags assigned to the key vault resource.
     */
    readonly tags: Dictionary<string> & ;
}

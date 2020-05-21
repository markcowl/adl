
/**
 * @description The Resource definition.
 */
export interface Resource {
    /**
     * @description Resource ID.
     */
    readonly id: string & ;
    /**
     * @description Resource name.
     */
    readonly name: string & ;
    /**
     * @description Resource type for API Management resource.
     */
    readonly type: string & ;
}

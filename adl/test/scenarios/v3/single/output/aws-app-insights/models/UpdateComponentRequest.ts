
/**
 * UpdateComponentRequest
 * @since 2018-11-25
 */
export interface UpdateComponentRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the component.
     * @since 2018-11-25
     */
    ComponentName?: string;
    /**
     * @description The new name of the component.
     * @since 2018-11-25
     */
    NewComponentName: string;
    /**
     * @description The list of resource ARNs that belong to the component.
     * @since 2018-11-25
     */
    ResourceList: Array<string & MaxLength<1011> & MinLength<1>>;
}

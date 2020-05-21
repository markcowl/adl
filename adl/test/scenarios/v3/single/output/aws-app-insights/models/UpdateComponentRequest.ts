
/**
 * UpdateComponentRequest
 */
export interface UpdateComponentRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the component.
     */
    ComponentName?: string;
    /**
     * @description The new name of the component.
     */
    NewComponentName: string;
    /**
     * @description The list of resource ARNs that belong to the component.
     */
    ResourceList: Array<string & MaxLength<1011> & MinLength<1>>;
}

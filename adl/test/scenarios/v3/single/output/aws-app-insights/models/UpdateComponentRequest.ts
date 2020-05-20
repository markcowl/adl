
/**
 * UpdateComponentRequest
 */
export interface UpdateComponentRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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
    ResourceList: unknown /*= (not tsschema -- undefinedResourceList/undefined ) =*/;
}

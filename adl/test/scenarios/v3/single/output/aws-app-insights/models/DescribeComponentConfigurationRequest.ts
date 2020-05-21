
/**
 * DescribeComponentConfigurationRequest
 */
export interface DescribeComponentConfigurationRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the component.
     */
    ComponentName?: string;
}

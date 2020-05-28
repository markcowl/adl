
/**
 * DeleteApplicationRequest
 * @since 2018-11-25
 */
export interface DeleteApplicationRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
}

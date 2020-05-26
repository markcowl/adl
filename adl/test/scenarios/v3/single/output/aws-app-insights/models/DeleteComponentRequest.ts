
/**
 * DeleteComponentRequest
 * @since 2018-11-25
 */
export interface DeleteComponentRequest {
    /** @since 2018-11-25 */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    ComponentName?: string;
}

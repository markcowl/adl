
/**
 * UpdateComponentRequest
 * @since 2018-11-25
 */
export interface UpdateComponentRequest {
    /** @since 2018-11-25 */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    ComponentName?: string;
    /** @since 2018-11-25 */
    NewComponentName: string;
    /** @since 2018-11-25 */
    ResourceList: Array<string & MaxLength<1011> & MinLength<1>>;
}


/**
 *
 * @since v3
 */
export interface deployment {
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    payload?: {
        deploy_user?: string;
        environment?: string;
        room_id?: double;
    };
    /**
     *
     * @since v3
     */
    ref?: string;
}

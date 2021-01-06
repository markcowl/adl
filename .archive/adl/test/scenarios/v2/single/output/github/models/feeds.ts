
/**
 *
 * @since v3
 */
export interface feeds {
    /**
     *
     * @since v3
     */
    _links?: {
        current_user?: {
            href?: string;
            type?: string;
        };
        current_user_actor?: {
            href?: string;
            type?: string;
        };
        current_user_organization?: {
            href?: string;
            type?: string;
        };
        current_user_public?: {
            href?: string;
            type?: string;
        };
        timeline?: {
            href?: string;
            type?: string;
        };
        user?: {
            href?: string;
            type?: string;
        };
    };
    /**
     *
     * @since v3
     */
    current_user_actor_url?: string;
    /**
     *
     * @since v3
     */
    current_user_organization_url?: string;
    /**
     *
     * @since v3
     */
    current_user_public?: string;
    /**
     *
     * @since v3
     */
    current_user_url?: string;
    /**
     *
     * @since v3
     */
    timeline_url?: string;
    /**
     *
     * @since v3
     */
    user_url?: string;
}

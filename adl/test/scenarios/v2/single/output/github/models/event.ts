import { actor } from "./actor";
import { organization } from "./organization";
/**
 *
 * @since v3
 */
export interface event {
    /**
     *
     * @since v3
     */
    actor?: actor;
    /**
     *
     * @since v3
     */
    created_at?: {};
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    org?: organization;
    /**
     *
     * @since v3
     */
    payload?: {};
    /**
     *
     * @since v3
     */
    public?: boolean;
    /**
     *
     * @since v3
     */
    repo?: {
        id?: int64;
        name?: string;
        url?: string;
    };
    /**
     *
     * @since v3
     */
    type?: string;
}

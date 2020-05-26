import { user } from './user';
/**
 * @since v3
 */
export interface search_users {
    /**
     * @since v3
     */
    items: Array<user>;
    /**
     * @since v3
     */
    total_count: int64;
}

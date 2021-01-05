
/**
 *
 * @since v3
 */
export interface rate_limit {
    /**
     *
     * @since v3
     */
    rate?: {
        limit?: int64;
        remaining?: int64;
        reset?: int64;
    };
}

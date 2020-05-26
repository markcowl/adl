
/** @since 2.3 */
export interface URLImage {
    /**
     * @since 2.3
     */
    height: int64 & Minimum<0>;
    /**
     * @since 2.3
     */
    url: string;
    /**
     * @since 2.3
     */
    width: int64 & Minimum<0>;
}


/**
 *
 * @since v3
 */
export interface postGist {
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    files?: {
        "file1.txt"?: {
            content?: string;
        };
    };
    /**
     *
     * @since v3
     */
    public?: boolean;
}

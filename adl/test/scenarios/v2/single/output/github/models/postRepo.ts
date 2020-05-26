
/**
 * @since v3
 */
export interface postRepo {
    /** @since v3 */
    auto_init: boolean;
    /**
     * @since v3
     */
    description: string;
    /** @since v3 */
    gitignore_template: string;
    /** @since v3 */
    has_downloads: boolean;
    /** @since v3 */
    has_issues: boolean;
    /** @since v3 */
    has_wiki: boolean;
    /**
     * @since v3
     */
    homepage: string;
    /**
     * @since v3
     */
    name?: string;
    /** @since v3 */
    private: boolean;
    /** @since v3 */
    team_id: int64;
}

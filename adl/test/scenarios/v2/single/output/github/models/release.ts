import { user } from "./user";
/**
 *
 * @since v3
 */
export interface release {
    /**
     *
     * @since v3
     */
    assets?: Array<{
        content_type?: string;
        created_at?: string;
        download_count?: int64;
        id?: int64;
        label?: string;
        name?: string;
        size?: int64;
        state?: string;
        updated_at?: string;
        uploader?: user;
        url?: string;
    }>;
    /**
     *
     * @since v3
     */
    assets_url?: string;
    /**
     *
     * @since v3
     */
    author?: user;
    /**
     *
     * @since v3
     */
    body?: string;
    /**
     *
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    draft?: boolean;
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    name?: string;
    /**
     *
     * @since v3
     */
    prerelease?: boolean;
    /**
     *
     * @since v3
     */
    published_at?: string;
    /**
     *
     * @since v3
     */
    tag_name?: string;
    /**
     *
     * @since v3
     */
    tarball_url?: string;
    /**
     *
     * @since v3
     */
    target_commitish?: string;
    /**
     *
     * @since v3
     */
    upload_url?: string;
    /**
     *
     * @since v3
     */
    url?: string;
    /**
     *
     * @since v3
     */
    zipball_url?: string;
}

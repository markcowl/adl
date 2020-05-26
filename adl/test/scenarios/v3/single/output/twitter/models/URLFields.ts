import { URLImage } from './URLImage';
/** @since 2.3 */
export interface URLFields {
    /** @since 2.3 */
    description: string;
    /** @since 2.3 */
    display_url: string;
    /**
     * @since 2.3
     */
    expanded_url: string;
    /**
     * @since 2.3
     */
    images: Array<URLImage> & MinimumElements<1>;
    /**
     * @since 2.3
     */
    status: int64 & Minimum<100> & Maximum<599>;
    /** @since 2.3 */
    title: string;
    /** @since 2.3 */
    unwound_url: string;
    /**
     * @since 2.3
     */
    url?: string;
}

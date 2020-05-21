import { URLImage } from './URLImage';
/**
 * @description Represent the portion of text recognized as a URL.
 */
export interface URLFields {
    /**
     * @description Description of the URL landing page.
     */
    description: string;
    /**
     * @description The URL as displayed in the Twitter client.
     */
    display_url: string;
    expanded_url: string;
    images: Array<URLImage> & MinimumElements<1>;
    status: int64 & Minimum<100> & Maximum<599>;
    /**
     * @description Title of the page the URL points to.
     */
    title: string;
    /**
     * @description Fully resolved url
     */
    unwound_url: string;
    url?: string;
}

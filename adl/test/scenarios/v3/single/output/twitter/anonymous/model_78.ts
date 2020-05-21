import { UrlEntity } from '../models/UrlEntity';
/**
 * @description Expanded details for the URL specified in the user's profile, with start and end indices.
 */
export interface model_78 {
    urls: Array<UrlEntity> & MinimumElements<1>;
}

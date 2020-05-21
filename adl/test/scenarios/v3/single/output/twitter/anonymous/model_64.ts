import { FullTextEntities } from '../models/FullTextEntities';
/**
 * @description A list of metadata found in the user's profile description.
 */
export interface model_64 {
    description: FullTextEntities;
    /**
     * @description Expanded details for the URL specified in the user's profile, with start and end indices.
     */
    url: {
        urls: Array<UrlEntity> & MinimumElements<1>;
    };
}

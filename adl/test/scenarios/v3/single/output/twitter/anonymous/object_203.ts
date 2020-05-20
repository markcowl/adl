import { FullTextEntities } from '../models/FullTextEntities';
/**
 * @description A list of metadata found in the user's profile description.
 */
export interface object_203 {
    description: FullTextEntities;
    /**
     * @description Expanded details for the URL specified in the user's profile, with start and end indices.
     */
    url: {
        urls: unknown /*= (not tsschema -- undefinedurls/undefined ) =*/;
    };
}

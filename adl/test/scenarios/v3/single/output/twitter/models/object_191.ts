import { FullTextEntities } from './FullTextEntities';
import { object_192 } from './object_192';
/**
 * @description A list of metadata found in the user's profile description.
 */
export interface object_191 {
    description: FullTextEntities;
    /**
     * @description Expanded details for the URL specified in the user's profile, with start and end indices.
     */
    url: object_192;
}

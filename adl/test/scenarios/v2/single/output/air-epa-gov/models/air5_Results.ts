import { air2_Facilities } from './air2_Facilities';
/**
 * @description Results Object
 */
export interface air5_Results {
    /**
     * @description A complex array of facility information.
     */
    Facilities?: Array<air2_Facilities>;
    /**
     * @description Field to record messages (typically performance-related) about packet processing
     */
    Message?: string;
    /**
     * @description The number of pages of results returned
     */
    PageNo?: string;
    /**
     * @description Sequential number assigned to entire search result
     */
    QueryID?: string;
    /**
     * @description Number of query results returned
     */
    QueryRows?: string;
}

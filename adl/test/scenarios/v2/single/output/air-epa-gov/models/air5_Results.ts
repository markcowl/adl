import { air2_Facilities } from './air2_Facilities';
/**
 * @description Results Object
 * @since 0.0.0
 */
export interface air5_Results {
    /**
     * @description A complex array of facility information.
     * @since 0.0.0
     */
    Facilities?: Array<air2_Facilities>;
    /**
     * @description Field to record messages (typically performance-related) about packet processing
     * @since 0.0.0
     */
    Message?: string;
    /**
     * @description The number of pages of results returned
     * @since 0.0.0
     */
    PageNo?: string;
    /**
     * @description Sequential number assigned to entire search result
     * @since 0.0.0
     */
    QueryID?: string;
    /**
     * @description Number of query results returned
     * @since 0.0.0
     */
    QueryRows?: string;
}

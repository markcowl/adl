
/**
 * @description Results Object
 */
export interface air5_Results {
    /**
     * @description A complex array of facility information.
     */
    Facilities?: any;
    /**
     * @description Field to record messages (typically performance-related) about packet processing
     */
    Message?: any;
    /**
     * @description The number of pages of results returned
     */
    PageNo?: any;
    /**
     * @description Sequential number assigned to entire search result
     */
    QueryID?: any;
    /**
     * @description Number of query results returned
     */
    QueryRows?: any;
}

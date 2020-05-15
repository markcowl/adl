import { air1_ClusterOutput } from './air1_ClusterOutput';
/**
 * 
 * @description Results Object
 */
export interface air3_Results {
    /**
     * 
     * @description Identifies which passed query system identifiers are invalid.
     */
    BadSystemIDs?: any;
    /**
     * 
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     */
    CVRows?: any;
    ClusterOutput: air1_ClusterOutput;
    /**
     * 
     * @description Number of clusters returned.
     */
    ClusterRecords: any;
    /**
     * 
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     */
    FEARows?: any;
    /**
     * 
     * @description A complex array of facility information.
     */
    Facilities: any;
    /**
     * 
     * @description Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
     */
    INSPRows?: any;
    /**
     * 
     * @description URL where all the icons are located
     */
    IconBaseURL?: any;
    /**
     * 
     * @description Number of facilities with tribal_flag populated
     */
    IndianCountryRows?: any;
    /**
     * 
     * @description Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
     */
    InfFEARows?: any;
    /**
     * 
     * @description Field to record messages (typically performance-related) about packet processing
     */
    Message?: any;
    /**
     * 
     * @description Combine this URL with the PUC to get popup info
     */
    PopUpBaseURL?: any;
    /**
     * 
     * @description Sequential number assigned to entire search result
     */
    QueryID?: any;
    /**
     * 
     * @description A list of submitted query parameters and their values.
     */
    QueryParameters?: any;
    /**
     * 
     * @description Number of query results returned
     */
    QueryRows?: any;
    /**
     * 
     * @description Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
     */
    SVRows?: any;
    /**
     * 
     * @description The base service URL.
     */
    ServiceBaseURL?: any;
    /**
     * 
     * @description The total dollar amount of either assessed or final penalties within the five year time period
     */
    TotalPenalties?: any;
    /**
     * 
     * @description Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
     */
    V3Rows?: any;
}

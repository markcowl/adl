import { air1_ClusterOutput } from './air1_ClusterOutput';
import { air3_Facilities } from './air3_Facilities';
import { qp0 } from './qp0';
/**
 * @description Results Object
 */
export interface air3_Results {
    /**
     * @description Identifies which passed query system identifiers are invalid.
     */
    BadSystemIDs?: string;
    /**
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     */
    CVRows?: string;
    ClusterOutput: air1_ClusterOutput;
    /**
     * @description Number of clusters returned.
     */
    ClusterRecords: string;
    /**
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     */
    FEARows?: string;
    /**
     * @description A complex array of facility information.
     */
    Facilities: Array<air3_Facilities>;
    /**
     * @description Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
     */
    INSPRows?: string;
    /**
     * @description URL where all the icons are located
     */
    IconBaseURL?: string;
    /**
     * @description Number of facilities with tribal_flag populated
     */
    IndianCountryRows?: string;
    /**
     * @description Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
     */
    InfFEARows?: string;
    /**
     * @description Field to record messages (typically performance-related) about packet processing
     */
    Message?: string;
    /**
     * @description Combine this URL with the PUC to get popup info
     */
    PopUpBaseURL?: string;
    /**
     * @description Sequential number assigned to entire search result
     */
    QueryID?: string;
    /**
     * @description A list of submitted query parameters and their values.
     */
    QueryParameters?: Array<qp0>;
    /**
     * @description Number of query results returned
     */
    QueryRows?: string;
    /**
     * @description Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
     */
    SVRows?: string;
    /**
     * @description The base service URL.
     */
    ServiceBaseURL?: string;
    /**
     * @description The total dollar amount of either assessed or final penalties within the five year time period
     */
    TotalPenalties?: string;
    /**
     * @description Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
     */
    V3Rows?: string;
}

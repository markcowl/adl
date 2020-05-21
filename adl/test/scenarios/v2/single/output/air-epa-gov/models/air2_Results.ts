import { air2_Facilities } from './air2_Facilities';
import { air2_MapOutput } from './air2_MapOutput';
/**
 * @description Results Object
 */
export interface air2_Results {
    /**
     * @description Identifies which passed query system identifiers are invalid.
     */
    BadSystemIDs?: string;
    /**
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     */
    CVRows?: string;
    /**
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     */
    FEARows?: string;
    /**
     * @description A complex array of facility information.
     */
    Facilities: Array<air2_Facilities>;
    /**
     * @description Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
     */
    INSPRows?: string;
    /**
     * @description Number of facilities with tribal_flag populated
     */
    IndianCountryRows?: string;
    /**
     * @description Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
     */
    InfFEARows?: string;
    MapOutput: air2_MapOutput;
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
    /**
     * @description Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
     */
    SVRows?: string;
    /**
     * @description The total dollar amount of either assessed or final penalties within the five year time period
     */
    TotalPenalties?: string;
    /**
     * @description Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
     */
    V3Rows?: string;
}

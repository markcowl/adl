import { air2_MapOutput } from './air2_MapOutput';
/**
 * @description Results Object
 */
export interface air2_Results {
    /**
     * @description Identifies which passed query system identifiers are invalid.
     */
    BadSystemIDs?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     */
    CVRows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     */
    FEARows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A complex array of facility information.
     */
    Facilities: unknown /*= (not tsschema -- undefinedFacilities/undefined ) =*/;
    /**
     * @description Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
     */
    INSPRows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of facilities with tribal_flag populated
     */
    IndianCountryRows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
     */
    InfFEARows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    MapOutput: air2_MapOutput;
    /**
     * @description Field to record messages (typically performance-related) about packet processing
     */
    Message?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of pages of results returned
     */
    PageNo?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Sequential number assigned to entire search result
     */
    QueryID?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of query results returned
     */
    QueryRows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
     */
    SVRows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The total dollar amount of either assessed or final penalties within the five year time period
     */
    TotalPenalties?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
     */
    V3Rows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

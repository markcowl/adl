
/**
 * @description Cluster Data Object
 */
export interface air1_ClusterData {
    /**
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     */
    CVRows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of facilities or cases in the cluster.
     */
    ClusterCount?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The icon file used to reprsent the cluster.
     */
    ClusterIcon?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The latitude in decimal degrees expressed using the NAD83 horizontal datum.
     */
    ClusterLatitude?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The longitude in decimal degrees expressed using the NAD83 horizontal datum.
     */
    ClusterLongitude?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description THe name or the identifier of the geographic area used for clustering.  Examples:  Alaska, Fairfax County, 22314
     */
    ClusterName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The representative geographic area used for clustering.  Examples:  State, County, Zip Code
     */
    ClusterType?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The value, internal to the database report object, that represents this cluster, like a state abbreviation, zip code, or county FIPS code.  Examples: AK, 22314, 50011
     */
    ClusterValue?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories
     */
    EPARegionCode?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     */
    FEARows?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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
    /**
     * @description Sequential number assigned to each facility or cluster returned.
     */
    ObjectId?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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

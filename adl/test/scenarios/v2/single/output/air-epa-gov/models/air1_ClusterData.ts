
/**
 * @description Cluster Data Object
 */
export interface air1_ClusterData {
    /**
     * @description Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
     */
    CVRows?: string;
    /**
     * @description The number of facilities or cases in the cluster.
     */
    ClusterCount?: string;
    /**
     * @description The icon file used to reprsent the cluster.
     */
    ClusterIcon?: string;
    /**
     * @description The latitude in decimal degrees expressed using the NAD83 horizontal datum.
     */
    ClusterLatitude?: string;
    /**
     * @description The longitude in decimal degrees expressed using the NAD83 horizontal datum.
     */
    ClusterLongitude?: string;
    /**
     * @description THe name or the identifier of the geographic area used for clustering.  Examples:  Alaska, Fairfax County, 22314
     */
    ClusterName?: string;
    /**
     * @description The representative geographic area used for clustering.  Examples:  State, County, Zip Code
     */
    ClusterType?: string;
    /**
     * @description The value, internal to the database report object, that represents this cluster, like a state abbreviation, zip code, or county FIPS code.  Examples: AK, 22314, 50011
     */
    ClusterValue?: string;
    /**
     * @description The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories
     */
    EPARegionCode?: string;
    /**
     * @description Summary count of the number of facilities with a formal enforcement action in the past five years
     */
    FEARows?: string;
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
    /**
     * @description Sequential number assigned to each facility or cluster returned.
     */
    ObjectId?: string;
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

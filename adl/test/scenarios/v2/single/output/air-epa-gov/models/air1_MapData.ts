
/**
 * @description Map Data Object
 * @since 0.0.0
 */
export interface air1_MapData {
    /**
     * @description The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
     * _ - No Violation Identified
     * V - Violation Identified
     * S - High Priority Violation
     * U - Undetermined
     * @since 0.0.0
     */
    CAAstatus?: string;
    /**
     * @description The number of formal enforcement actions that have been taken against the facility
     * @since 0.0.0
     */
    FormalCount?: string;
    /**
     * @description Name of each individual icon file within the URL base
     * @since 0.0.0
     */
    ICON?: string;
    /**
     * @description The number of informal enforcement actions that have been taken against the facility
     * @since 0.0.0
     */
    InformalCount?: string;
    /**
     * @description The latitude of the facility in degrees, to four decimal places
     * @since 0.0.0
     */
    LAT?: string;
    /**
     * @description The longitude of the facility in degrees, to four decimal places
     * @since 0.0.0
     */
    LON?: string;
    /**
     * @description The unique identifier for the last inspection
     * @since 0.0.0
     */
    LastInsp?: string;
    /**
     * @description For DFR, this is the Facility name. The name corresponds to the TYPE value
     * @since 0.0.0
     */
    NAME?: string;
    /**
     * @description Pop up value. Combine with PopUpBaseURL to give the popup for the facility
     * @since 0.0.0
     */
    PUV?: string;
    /**
     * @description For DFR, this is always facility
     * @since 0.0.0
     */
    TYPE?: string;
}

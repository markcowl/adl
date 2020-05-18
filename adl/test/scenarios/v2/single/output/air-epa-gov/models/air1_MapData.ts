
/**
 * @description Map Data Object
 */
export interface air1_MapData {
    /**
     * @description The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
     * _ - No Violation Identified
     * V - Violation Identified
     * S - High Priority Violation
     * U - Undetermined
     */
    CAAstatus?: any;
    /**
     * @description The number of formal enforcement actions that have been taken against the facility
     */
    FormalCount?: any;
    /**
     * @description Name of each individual icon file within the URL base
     */
    ICON?: any;
    /**
     * @description The number of informal enforcement actions that have been taken against the facility
     */
    InformalCount?: any;
    /**
     * @description The latitude of the facility in degrees, to four decimal places
     */
    LAT?: any;
    /**
     * @description The longitude of the facility in degrees, to four decimal places
     */
    LON?: any;
    /**
     * @description The unique identifier for the last inspection
     */
    LastInsp?: any;
    /**
     * @description For DFR, this is the Facility name. The name corresponds to the TYPE value
     */
    NAME?: any;
    /**
     * @description Pop up value. Combine with PopUpBaseURL to give the popup for the facility
     */
    PUV?: any;
    /**
     * @description For DFR, this is always facility
     */
    TYPE?: any;
}

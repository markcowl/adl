
/**
 * @description Properties of a private link resource.
 */
export interface PrivateLinkResourceProperties {
    /**
     * @description Group identifier of private link resource.
     */
    readonly groupId: string & ;
    /**
     * @description Required member names of private link resource.
     */
    readonly requiredMembers: Array<string> & ;
    /**
     * @description Required DNS zone names of the the private link resource.
     */
    requiredZoneNames: Array<string>;
}

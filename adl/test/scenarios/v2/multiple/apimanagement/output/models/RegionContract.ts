
/**
 * @description Region profile.
 */
export interface RegionContract {
    /**
     * @description Region name.
     */
    readonly name: string & ;
    /**
     * @description whether Region is the master region.
     */
    isMasterRegion: boolean;
    /**
     * @description whether Region is deleted.
     */
    isDeleted: boolean;
}

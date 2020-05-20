
/**
 * @description Region profile.
 */
export interface RegionContract {
    /**
     * @description Region name.
     */
    readonly name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description whether Region is the master region.
     */
    isMasterRegion: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description whether Region is deleted.
     */
    isDeleted: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

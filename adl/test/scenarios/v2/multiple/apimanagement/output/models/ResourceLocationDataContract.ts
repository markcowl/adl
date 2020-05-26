
/** @since 2019-12-01 */
export interface ResourceLocationDataContract {
    /** @since 2019-12-01 */
    name?: string & MaxLength<256>;
    /** @since 2019-12-01 */
    city: string & MaxLength<256>;
    /** @since 2019-12-01 */
    district: string & MaxLength<256>;
    /** @since 2019-12-01 */
    countryOrRegion: string & MaxLength<256>;
}

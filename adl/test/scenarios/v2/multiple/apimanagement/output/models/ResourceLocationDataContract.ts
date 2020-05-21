
/**
 * @description Resource location data properties.
 */
export interface ResourceLocationDataContract {
    /**
     * @description A canonical name for the geographic or physical location.
     */
    name?: string & MaxLength<256>;
    /**
     * @description The city or locality where the resource is located.
     */
    city: string & MaxLength<256>;
    /**
     * @description The district, state, or province where the resource is located.
     */
    district: string & MaxLength<256>;
    /**
     * @description The country or region where the resource is located.
     */
    countryOrRegion: string & MaxLength<256>;
}

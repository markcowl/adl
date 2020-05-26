
/** @since 2019-12-01 */
export interface TagDescriptionBaseProperties {
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    externalDocsUrl: string & MaxLength<2000>;
    /** @since 2019-12-01 */
    externalDocsDescription: string;
}

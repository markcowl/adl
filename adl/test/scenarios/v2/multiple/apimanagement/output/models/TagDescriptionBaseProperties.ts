
/**
 * @description Parameters supplied to the Create TagDescription operation.
 */
export interface TagDescriptionBaseProperties {
    /**
     * @description Description of the Tag.
     */
    description: string;
    /**
     * @description Absolute URL of external resources describing the tag.
     */
    externalDocsUrl: string & MaxLength<2000>;
    /**
     * @description Description of the external resources describing the tag.
     */
    externalDocsDescription: string;
}

import { TagDescriptionBaseProperties } from './TagDescriptionBaseProperties';
/**
 * @description TagDescription contract Properties.
 */
export interface TagDescriptionContractProperties extends TagDescriptionBaseProperties {
    /**
     * @description Identifier of the tag in the form of /tags/{tagId}
     */
    tagId: string;
    /**
     * @description Tag name.
     */
    displayName: string & MaxLength<160> & MinLength<1>;
}

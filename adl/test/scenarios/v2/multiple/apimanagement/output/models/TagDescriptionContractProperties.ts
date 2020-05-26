import { TagDescriptionBaseProperties } from './TagDescriptionBaseProperties';
/** @since 2019-12-01 */
export interface TagDescriptionContractProperties extends TagDescriptionBaseProperties {
    /** @since 2019-12-01 */
    tagId: string;
    /** @since 2019-12-01 */
    displayName: string & MaxLength<160> & MinLength<1>;
}

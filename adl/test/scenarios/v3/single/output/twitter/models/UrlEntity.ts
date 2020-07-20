import { EntityIndices } from "./EntityIndices";
import { URLFields } from "./URLFields";
/**
 * @description Represent the portion of text recognized as a URL, and its start and end position within the text.
 * @since 2.3
 */
export interface UrlEntity extends EntityIndices, URLFields {
}

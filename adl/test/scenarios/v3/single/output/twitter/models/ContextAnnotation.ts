import { ContextAnnotationDomainFields } from './ContextAnnotationDomainFields';
import { ContextAnnotationEntityFields } from './ContextAnnotationEntityFields';
/** @since 2.3 */
export interface ContextAnnotation {
    /**
     * @since 2.3
     */
    domain?: ContextAnnotationDomainFields;
    /**
     * @since 2.3
     */
    entity?: ContextAnnotationEntityFields;
}

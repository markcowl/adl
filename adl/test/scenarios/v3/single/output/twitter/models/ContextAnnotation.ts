import { ContextAnnotationDomainFields } from './ContextAnnotationDomainFields';
import { ContextAnnotationEntityFields } from './ContextAnnotationEntityFields';
/**
 * @description Annotation inferred from the tweet text.
 */
export interface ContextAnnotation {
    domain?: ContextAnnotationDomainFields;
    entity?: ContextAnnotationEntityFields;
}

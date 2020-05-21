
/**
 * @description Represents the data for the context annotation domain.
 */
export interface ContextAnnotationDomainFields {
    /**
     * @description Description of the context annotation domain.
     */
    description: string;
    /**
     * @description The unique id for a context annotation domain.
     */
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @description Name of the context annotation domain.
     */
    name: string;
}

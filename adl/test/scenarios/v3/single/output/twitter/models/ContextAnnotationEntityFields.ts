
/**
 * @description Represents the data for the context annotation entity.
 */
export interface ContextAnnotationEntityFields {
    /**
     * @description Description of the context annotation entity.
     */
    description: string;
    /**
     * @description The unique id for a context annotation entity.
     */
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @description Name of the context annotation entity.
     */
    name: string;
}

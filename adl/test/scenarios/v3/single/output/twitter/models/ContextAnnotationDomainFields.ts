
/** @since 2.3 */
export interface ContextAnnotationDomainFields {
    /** @since 2.3 */
    description: string;
    /** @since 2.3 */
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    /** @since 2.3 */
    name: string;
}

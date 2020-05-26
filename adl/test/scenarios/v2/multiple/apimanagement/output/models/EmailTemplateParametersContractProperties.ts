
/** @since 2019-12-01 */
export interface EmailTemplateParametersContractProperties {
    /** @since 2019-12-01 */
    name: string & MaxLength<256> & MinLength<1> & RegularExpression<"^[A-Za-z0-9-._]+$">;
    /** @since 2019-12-01 */
    title: string & MaxLength<4096> & MinLength<1>;
    /** @since 2019-12-01 */
    description: string & MaxLength<256> & MinLength<1> & RegularExpression<"^[A-Za-z0-9-._]+$">;
}

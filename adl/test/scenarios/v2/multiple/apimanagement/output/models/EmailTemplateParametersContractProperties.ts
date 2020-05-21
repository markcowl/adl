
/**
 * @description Email Template Parameter contract.
 */
export interface EmailTemplateParametersContractProperties {
    /**
     * @description Template parameter name.
     */
    name: string & MaxLength<256> & MinLength<1> & RegularExpression<"^[A-Za-z0-9-._]+$">;
    /**
     * @description Template parameter title.
     */
    title: string & MaxLength<4096> & MinLength<1>;
    /**
     * @description Template parameter description.
     */
    description: string & MaxLength<256> & MinLength<1> & RegularExpression<"^[A-Za-z0-9-._]+$">;
}

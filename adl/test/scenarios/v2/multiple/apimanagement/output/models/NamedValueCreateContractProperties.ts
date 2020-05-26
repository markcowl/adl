import { NamedValueEntityBaseParameters } from './NamedValueEntityBaseParameters';
/** @since 2019-12-01 */
export interface NamedValueCreateContractProperties extends NamedValueEntityBaseParameters {
    /** @since 2019-12-01 */
    displayName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"^[A-Za-z0-9-._]+$">;
    /** @since 2019-12-01 */
    value?: string & MaxLength<4096> & MinLength<1>;
}

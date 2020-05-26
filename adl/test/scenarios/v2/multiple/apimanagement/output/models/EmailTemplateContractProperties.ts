import { EmailTemplateParametersContractProperties } from './EmailTemplateParametersContractProperties';
/** @since 2019-12-01 */
export interface EmailTemplateContractProperties {
    /** @since 2019-12-01 */
    subject?: string & MaxLength<1000> & MinLength<1>;
    /** @since 2019-12-01 */
    body?: string & MinLength<1>;
    /** @since 2019-12-01 */
    title: string;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    readonly isDefault: boolean & ;
    /** @since 2019-12-01 */
    parameters: Array<EmailTemplateParametersContractProperties>;
}

import { EmailTemplateParametersContractProperties } from './EmailTemplateParametersContractProperties';
/**
 * @description Email Template Update Contract properties.
 */
export interface EmailTemplateUpdateParameterProperties {
    /**
     * @description Subject of the Template.
     */
    subject: string & MaxLength<1000> & MinLength<1>;
    /**
     * @description Title of the Template.
     */
    title: string;
    /**
     * @description Description of the Email Template.
     */
    description: string;
    /**
     * @description Email Template Body. This should be a valid XDocument
     */
    body: string & MinLength<1>;
    /**
     * @description Email Template Parameter values.
     */
    parameters: Array<EmailTemplateParametersContractProperties>;
}

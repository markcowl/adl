import { EmailTemplateParametersContractProperties } from './EmailTemplateParametersContractProperties';
/**
 * @description Email Template Contract properties.
 */
export interface EmailTemplateContractProperties {
    /**
     * @description Subject of the Template.
     */
    subject?: string & MaxLength<1000> & MinLength<1>;
    /**
     * @description Email Template Body. This should be a valid XDocument
     */
    body?: string & MinLength<1>;
    /**
     * @description Title of the Template.
     */
    title: string;
    /**
     * @description Description of the Email Template.
     */
    description: string;
    /**
     * @description Whether the template is the default template provided by Api Management or has been edited.
     */
    readonly isDefault: boolean & ;
    /**
     * @description Email Template Parameter values.
     */
    parameters: Array<EmailTemplateParametersContractProperties>;
}


/**
 * @description Email Template Contract properties.
 */
export interface EmailTemplateContractProperties {
    /**
     * @description Subject of the Template.
     */
    subject?: any;
    /**
     * @description Email Template Body. This should be a valid XDocument
     */
    body?: any;
    /**
     * @description Title of the Template.
     */
    title: any;
    /**
     * @description Description of the Email Template.
     */
    description: any;
    /**
     * @description Whether the template is the default template provided by Api Management or has been edited.
     */
    readonly isDefault: any;
    /**
     * @description Email Template Parameter values.
     */
    parameters: any;
}

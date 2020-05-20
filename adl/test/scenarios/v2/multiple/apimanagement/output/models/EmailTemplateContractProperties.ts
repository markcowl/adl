
/**
 * @description Email Template Contract properties.
 */
export interface EmailTemplateContractProperties {
    /**
     * @description Subject of the Template.
     */
    subject?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Email Template Body. This should be a valid XDocument
     */
    body?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Title of the Template.
     */
    title: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Description of the Email Template.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Whether the template is the default template provided by Api Management or has been edited.
     */
    readonly isDefault: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Email Template Parameter values.
     */
    parameters: unknown /*= (not tsschema -- undefinedparameters/undefined ) =*/;
}

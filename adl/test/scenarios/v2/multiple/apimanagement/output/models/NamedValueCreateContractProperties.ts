import { NamedValueEntityBaseParameters } from './NamedValueEntityBaseParameters';
/**
 * @description NamedValue Contract properties.
 */
export interface NamedValueCreateContractProperties extends NamedValueEntityBaseParameters {
    /**
     * @description Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
     */
    displayName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    value?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

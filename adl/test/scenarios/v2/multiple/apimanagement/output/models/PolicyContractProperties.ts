import { PolicyContentFormat } from '../enums/PolicyContentFormat';
/**
 * @description Policy contract Properties.
 */
export interface PolicyContractProperties {
    /**
     * @description Contents of the Policy as defined by the format.
     */
    value?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Format of the policyContent.
     */
    format: PolicyContentFormat;
}

import { PolicyContentFormat } from '../PolicyContentFormat';
/**
 * @description Policy contract Properties.
 */
export interface PolicyContractProperties {
    /**
     * @description Contents of the Policy as defined by the format.
     */
    value?: any;
    /**
     * @description Format of the policyContent.
     */
    format: PolicyContentFormat;
}

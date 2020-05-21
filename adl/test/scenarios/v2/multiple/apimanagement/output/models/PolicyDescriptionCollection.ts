import { PolicyDescriptionContract } from './PolicyDescriptionContract';
/**
 * @description Descriptions of APIM policies.
 */
export interface PolicyDescriptionCollection {
    /**
     * @description Descriptions of APIM policies.
     */
    value: Array<PolicyDescriptionContract>;
    /**
     * @description Total record count number.
     */
    count: int64;
}

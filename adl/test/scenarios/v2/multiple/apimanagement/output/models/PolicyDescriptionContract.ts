import { Resource } from './Resource';
import { PolicyDescriptionContractProperties } from './PolicyDescriptionContractProperties';
/**
 * @description Policy description details.
 */
export interface PolicyDescriptionContract extends Resource {
    /**
     * @description Policy description contract properties.
     */
    properties: PolicyDescriptionContractProperties;
}

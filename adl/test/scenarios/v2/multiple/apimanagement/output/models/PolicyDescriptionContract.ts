import { PolicyDescriptionContractProperties } from './PolicyDescriptionContractProperties';
import { Resource } from './Resource';
/**
 * @description Policy description details.
 */
export interface PolicyDescriptionContract extends Resource {
    /**
     * @description Policy description contract properties.
     */
    properties: PolicyDescriptionContractProperties;
}

import { Resource } from './Resource';
import { EmailTemplateContractProperties } from './EmailTemplateContractProperties';
/**
 * @description Email Template details.
 */
export interface EmailTemplateContract extends Resource {
    /**
     * @description Email Template entity contract properties.
     */
    properties: EmailTemplateContractProperties;
}

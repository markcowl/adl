import { EmailTemplateContractProperties } from './EmailTemplateContractProperties';
import { Resource } from './Resource';
/**
 * @description Email Template details.
 */
export interface EmailTemplateContract extends Resource {
    /**
     * @description Email Template entity contract properties.
     */
    properties: EmailTemplateContractProperties;
}

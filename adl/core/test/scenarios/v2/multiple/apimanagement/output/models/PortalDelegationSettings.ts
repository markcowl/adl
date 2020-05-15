import { Resource } from './Resource';
import { PortalDelegationSettingsProperties } from './PortalDelegationSettingsProperties';
/**
 * 
 * @description Delegation settings for a developer portal.
 */
export interface PortalDelegationSettings extends Resource {
    /**
     * 
     * @description Delegation settings contract properties.
     */
    properties: PortalDelegationSettingsProperties;
}

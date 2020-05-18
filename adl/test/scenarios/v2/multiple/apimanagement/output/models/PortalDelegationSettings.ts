import { PortalDelegationSettingsProperties } from './PortalDelegationSettingsProperties';
import { Resource } from './Resource';
/**
 * @description Delegation settings for a developer portal.
 */
export interface PortalDelegationSettings extends Resource {
    /**
     * @description Delegation settings contract properties.
     */
    properties: PortalDelegationSettingsProperties;
}

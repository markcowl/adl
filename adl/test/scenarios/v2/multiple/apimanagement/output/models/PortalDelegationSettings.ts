import { Resource } from './Resource';
import { PortalDelegationSettingsProperties } from './PortalDelegationSettingsProperties';
/**
 * @description Delegation settings for a developer portal.
 * @since 2019-12-01
 */
export interface PortalDelegationSettings extends Resource {
    /**
     * @description Delegation settings contract properties.
     * @since 2019-12-01
     */
    properties: PortalDelegationSettingsProperties;
}

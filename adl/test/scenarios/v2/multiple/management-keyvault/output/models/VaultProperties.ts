import { Sku } from './Sku';
import { AccessPolicyEntry } from './AccessPolicyEntry';
import { NetworkRuleSet } from './NetworkRuleSet';
import { PrivateEndpointConnectionItem } from './PrivateEndpointConnectionItem';
/** @since 2019-09-01 */
export interface VaultProperties {
    /** @since 2019-09-01 */
    tenantId?: uuid;
    /** @since 2019-09-01 */
    sku?: Sku;
    /** @since 2019-09-01 */
    accessPolicies: Array<AccessPolicyEntry>;
    /** @since 2019-09-01 */
    vaultUri: string;
    /** @since 2019-09-01 */
    enabledForDeployment: boolean;
    /** @since 2019-09-01 */
    enabledForDiskEncryption: boolean;
    /** @since 2019-09-01 */
    enabledForTemplateDeployment: boolean;
    /** @since 2019-09-01 */
    enableSoftDelete: boolean;
    /** @since 2019-09-01 */
    softDeleteRetentionInDays: int32;
    /** @since 2019-09-01 */
    enableRbacAuthorization: boolean;
    /** @since 2019-09-01 */
    createMode: CreateMode;
    /** @since 2019-09-01 */
    enablePurgeProtection: boolean;
    /** @since 2019-09-01 */
    networkAcls: NetworkRuleSet;
    /** @since 2019-09-01 */
    readonly privateEndpointConnections: Array<PrivateEndpointConnectionItem> & ;
}

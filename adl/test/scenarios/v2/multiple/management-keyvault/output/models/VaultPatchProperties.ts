import { CreateMode } from '../enums/CreateMode';
import { NetworkRuleSet } from './NetworkRuleSet';
import { Sku } from './Sku';
/**
 * @description Properties of the vault
 */
export interface VaultPatchProperties {
    /**
     * @description The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    tenantId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description SKU details
     */
    sku: Sku;
    /**
     * @description An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
     */
    accessPolicies: unknown /*= (not tsschema -- undefinedaccessPolicies/undefined ) =*/;
    /**
     * @description Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
     */
    enabledForDeployment: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
     */
    enabledForDiskEncryption: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
     */
    enabledForTemplateDeployment: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Property to specify whether the 'soft delete' functionality is enabled for this key vault. Once set to true, it cannot be reverted to false.
     */
    enableSoftDelete: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the value of this property will not change.
     */
    enableRbacAuthorization: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description softDelete data retention days. It accepts >=7 and <=90.
     */
    softDeleteRetentionInDays: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The vault's create mode to indicate whether the vault need to be recovered or not.
     */
    createMode: CreateMode;
    /**
     * @description Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
     */
    enablePurgeProtection: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A collection of rules governing the accessibility of the vault from specific network locations.
     */
    networkAcls: NetworkRuleSet;
}

import { Permissions } from './Permissions';
/**
 * @description An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
 */
export interface AccessPolicyEntry {
    /**
     * @description The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
     */
    tenantId?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
     */
    objectId?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description  Application ID of the client making request on behalf of a principal
     */
    applicationId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Permissions the identity has for keys, secrets and certificates.
     */
    permissions?: Permissions;
}

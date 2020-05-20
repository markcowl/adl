
/**
 * @description Permissions the identity has for keys, secrets, certificates and storage.
 */
export interface Permissions {
    /**
     * @description Permissions to keys
     */
    keys: unknown /*= (not tsschema -- undefinedkeys/undefined ) =*/;
    /**
     * @description Permissions to secrets
     */
    secrets: unknown /*= (not tsschema -- undefinedsecrets/undefined ) =*/;
    /**
     * @description Permissions to certificates
     */
    certificates: unknown /*= (not tsschema -- undefinedcertificates/undefined ) =*/;
    /**
     * @description Permissions to storage accounts
     */
    storage: unknown /*= (not tsschema -- undefinedstorage/undefined ) =*/;
}


/**
 * @description Permissions the identity has for keys, secrets, certificates and storage.
 */
export interface Permissions {
    /**
     * @description Permissions to keys
     */
    keys: any;
    /**
     * @description Permissions to secrets
     */
    secrets: any;
    /**
     * @description Permissions to certificates
     */
    certificates: any;
    /**
     * @description Permissions to storage accounts
     */
    storage: any;
}

import { KeyPermissions } from '../enums/KeyPermissions';
import { SecretPermissions } from '../enums/SecretPermissions';
import { CertificatePermissions } from '../enums/CertificatePermissions';
import { StoragePermissions } from '../enums/StoragePermissions';
/**
 * @description Permissions the identity has for keys, secrets, certificates and storage.
 */
export interface Permissions {
    /**
     * @description Permissions to keys
     */
    keys: Array<KeyPermissions>;
    /**
     * @description Permissions to secrets
     */
    secrets: Array<SecretPermissions>;
    /**
     * @description Permissions to certificates
     */
    certificates: Array<CertificatePermissions>;
    /**
     * @description Permissions to storage accounts
     */
    storage: Array<StoragePermissions>;
}

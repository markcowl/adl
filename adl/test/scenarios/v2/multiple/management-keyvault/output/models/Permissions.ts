import { KeyPermissions } from '../enums/KeyPermissions';
import { SecretPermissions } from '../enums/SecretPermissions';
import { CertificatePermissions } from '../enums/CertificatePermissions';
import { StoragePermissions } from '../enums/StoragePermissions';
/** @since 2019-09-01 */
export interface Permissions {
    /** @since 2019-09-01 */
    keys: Array<KeyPermissions>;
    /** @since 2019-09-01 */
    secrets: Array<SecretPermissions>;
    /** @since 2019-09-01 */
    certificates: Array<CertificatePermissions>;
    /** @since 2019-09-01 */
    storage: Array<StoragePermissions>;
}

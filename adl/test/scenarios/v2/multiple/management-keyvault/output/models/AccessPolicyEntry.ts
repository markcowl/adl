import { Permissions } from './Permissions';
/** @since 2019-09-01 */
export interface AccessPolicyEntry {
    /** @since 2019-09-01 */
    tenantId?: uuid;
    /** @since 2019-09-01 */
    objectId?: string;
    /** @since 2019-09-01 */
    applicationId: uuid;
    /** @since 2019-09-01 */
    permissions?: Permissions;
}

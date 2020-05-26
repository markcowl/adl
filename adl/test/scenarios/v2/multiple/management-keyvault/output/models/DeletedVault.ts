import { DeletedVaultProperties } from './DeletedVaultProperties';
/** @since 2019-09-01 */
export interface DeletedVault {
    /** @since 2019-09-01 */
    readonly id: string & ;
    /** @since 2019-09-01 */
    readonly name: string & ;
    /** @since 2019-09-01 */
    readonly type: string & ;
    /** @since 2019-09-01 */
    properties: DeletedVaultProperties;
}

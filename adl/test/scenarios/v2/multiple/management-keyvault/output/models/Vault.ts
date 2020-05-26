import { VaultProperties } from './VaultProperties';
/** @since 2019-09-01 */
export interface Vault {
    /** @since 2019-09-01 */
    readonly id: string & ;
    /** @since 2019-09-01 */
    readonly name: string & ;
    /** @since 2019-09-01 */
    readonly type: string & ;
    /** @since 2019-09-01 */
    location: string;
    /** @since 2019-09-01 */
    tags: Dictionary<string>;
    /** @since 2019-09-01 */
    properties?: VaultProperties;
}

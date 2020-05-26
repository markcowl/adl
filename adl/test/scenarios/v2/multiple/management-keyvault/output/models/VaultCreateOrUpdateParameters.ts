import { VaultProperties } from './VaultProperties';
/** @since 2019-09-01 */
export interface VaultCreateOrUpdateParameters {
    /** @since 2019-09-01 */
    location?: string;
    /** @since 2019-09-01 */
    tags: Dictionary<string>;
    /** @since 2019-09-01 */
    properties?: VaultProperties;
}

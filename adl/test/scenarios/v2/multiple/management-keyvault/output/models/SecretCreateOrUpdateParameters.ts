import { SecretProperties } from './SecretProperties';
/** @since 2019-09-01 */
export interface SecretCreateOrUpdateParameters {
    /** @since 2019-09-01 */
    tags: Dictionary<string>;
    /** @since 2019-09-01 */
    properties?: SecretProperties;
}

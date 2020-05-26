import { SecretPatchProperties } from './SecretPatchProperties';
/** @since 2019-09-01 */
export interface SecretPatchParameters {
    /** @since 2019-09-01 */
    tags: Dictionary<string>;
    /** @since 2019-09-01 */
    properties: SecretPatchProperties;
}

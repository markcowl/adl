import { SecretAttributes } from './SecretAttributes';
/** @since 2019-09-01 */
export interface SecretPatchProperties {
    /** @since 2019-09-01 */
    value: string;
    /** @since 2019-09-01 */
    contentType: string;
    /** @since 2019-09-01 */
    attributes: SecretAttributes;
}

import { SecretAttributes } from './SecretAttributes';
/**
 * @description Properties of the secret
 */
export interface SecretPatchProperties {
    /**
     * @description The value of the secret.
     */
    value: any;
    /**
     * @description The content type of the secret.
     */
    contentType: any;
    /**
     * @description The attributes of the secret.
     */
    attributes: SecretAttributes;
}

import { SecretAttributes } from './SecretAttributes';
/**
 * @description Properties of the secret
 */
export interface SecretPatchProperties {
    /**
     * @description The value of the secret.
     */
    value: string;
    /**
     * @description The content type of the secret.
     */
    contentType: string;
    /**
     * @description The attributes of the secret.
     */
    attributes: SecretAttributes;
}

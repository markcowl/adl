import { SecretAttributes } from './SecretAttributes';
/**
 * @description Properties of the secret
 */
export interface SecretPatchProperties {
    /**
     * @description The value of the secret.
     */
    value: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The content type of the secret.
     */
    contentType: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The attributes of the secret.
     */
    attributes: SecretAttributes;
}

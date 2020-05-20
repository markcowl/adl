import { SecretPatchProperties } from './SecretPatchProperties';
/**
 * @description Parameters for patching a secret
 */
export interface SecretPatchParameters {
    /**
     * @description The tags that will be assigned to the secret.
     */
    tags: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Properties of the secret
     */
    properties: SecretPatchProperties;
}

import { SecretProperties } from './SecretProperties';
/**
 * 
 * @description Parameters for creating or updating a secret
 */
export interface SecretCreateOrUpdateParameters {
    /**
     * 
     * @description The tags that will be assigned to the secret.
     */
    tags: any;
    /**
     * 
     * @description Properties of the secret
     */
    properties?: SecretProperties;
}

import { Resource } from './Resource';
import { SecretProperties } from './SecretProperties';
/**
 * @description Resource information with extended details.
 */
export interface Secret extends Resource {
    /**
     * @description Properties of the secret
     */
    properties?: SecretProperties;
}

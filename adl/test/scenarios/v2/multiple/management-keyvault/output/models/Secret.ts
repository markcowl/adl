import { Resource } from './Resource';
import { SecretProperties } from './SecretProperties';
/** @since 2019-09-01 */
export interface Secret extends Resource {
    /** @since 2019-09-01 */
    properties?: SecretProperties;
}

import { Resource } from './Resource';
/** @since 2019-12-01 */
export interface AssociationContract extends Resource {
    /** @since 2019-12-01 */
    properties: {
        /** @since 2019-12-01 */
        provisioningState: ProvisioningState;
    };
}

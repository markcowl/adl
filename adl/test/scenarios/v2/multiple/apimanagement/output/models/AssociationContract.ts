import { Resource } from './Resource';
/**
 * @description Association entity details.
 */
export interface AssociationContract extends Resource {
    /**
     * @description Association entity contract properties.
     */
    properties: {
        /**
         * @description Provisioning state.
         */
        provisioningState: ProvisioningState;
    };
}

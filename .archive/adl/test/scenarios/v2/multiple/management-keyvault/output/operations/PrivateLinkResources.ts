import { SubscriptionIdParameter } from "../aliases/SubscriptionIdParameter";
import { ResourceGroupName } from "../aliases/ResourceGroupName";
import { VaultName } from "../aliases/VaultName";
import { ApiVersionParameter } from "../aliases/ApiVersionParameter";
import { PrivateLinkResourceListResult } from "../models/PrivateLinkResourceListResult";
import { CloudError } from "../models/CloudError";
export interface PrivateLinkResources {
    /**
     * @description Gets the private link resources supported for the key vault.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateLinkResources
     * @tag PrivateLinkResources
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param api_version - Client Api Version.
     * @return 200 - Successfully retrieved private link resources.
     * @return default - Error response describing why the operation failed.
     */
    ListByVault(subscriptionId: SubscriptionIdParameter, resourceGroupName: ResourceGroupName, vaultName: VaultName, api_version: ApiVersionParameter): [(code: 200, mediaType: "application/json") => {
        body: PrivateLinkResourceListResult;
    }, (mediaType: "application/json") => {
        body: CloudError;
        isException: true;
    }];
}

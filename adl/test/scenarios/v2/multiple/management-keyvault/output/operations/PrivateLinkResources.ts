export interface PrivateLinkResources {
    /**
     * @description Gets the private link resources supported for the key vault.
     * @since 2019-09-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateLinkResources
     * @tag PrivateLinkResources
     * @return 200|application/json - Successfully retrieved private link resources.
     * @return default|application/json - Error response describing why the operation failed.
     */
    ListByVault(subscriptionId: SubscriptionIdParameter, resourceGroupName: ResourceGroupName, vaultName: VaultName, api_version: ApiVersionParameter): [(code: 200, mediaType: "application/json") => {
        body: PrivateLinkResourceListResult;
    }, (mediaType: "application/json") => {
        body: CloudError;
        isException: true;
    }];
}

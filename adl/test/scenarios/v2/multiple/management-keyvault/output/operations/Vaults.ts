import { schema } from '../aliases/schema';
export interface Vaults {
    /**
     * @description Gets the specified Azure key vault.
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - The name of the vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Retrieved vault
     * @since 2019-09-01
     */
    Get(body?: Http.Body<file, 'application/json'>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Create or update a key vault in the specified subscription.
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the server belongs.
     * @param vaultName - Name of the vault
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Parameters to create or update the vault
     * @return 200 - Created or updated vault
     * @return 201 - Created or updated vault
     * @since 2019-09-01
     */
    CreateOrUpdate(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<schema, 'application/json'>): Http.Response<'200', schema, 'application/json'> | Http.Response<'201', schema, 'application/json'>;
    /**
     * @description Deletes the specified Azure key vault.
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - The name of the vault to delete
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - OK Response.
     * @return 204 - No Content.
     * @since 2019-09-01
     */
    Delete(body?: Http.Body<file, 'application/json'>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', any, 'application/json'> | Http.Response<'204', any, 'application/json'>;
    /**
     * @description Update a key vault in the specified subscription.
     * @http PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the server belongs.
     * @param vaultName - Name of the vault
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Parameters to patch the vault
     * @return 200 - Patched vault
     * @return 201 - Patched vault
     * @since 2019-09-01
     */
    Update(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<schema, 'application/json'>): Http.Response<'200', schema, 'application/json'> | Http.Response<'201', schema, 'application/json'>;
    /**
     * @description Update access policies in a key vault in the specified subscription.
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind}
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param vaultName - Name of the vault
     * @param operationKind - Name of the operation
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param parameters - Access policy to merge into the vault
     * @return 200 - The updated access policies
     * @return 201 - The updated access policies
     * @since 2019-09-01
     */
    UpdateAccessPolicy(resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, operationKind: Http.Path<AccessPolicyUpdateKind>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>, parameters: Http.Body<schema, 'application/json'>): Http.Response<'200', schema, 'application/json'> | Http.Response<'201', schema, 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription and within the specified resource group.
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @param resourceGroupName - The name of the Resource Group to which the vault belongs.
     * @param __top - Maximum number of results to return.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Get information about all key vaults in the specified resource group.
     * @since 2019-09-01
     */
    ListByResourceGroup(body?: Http.Body<file, 'application/json'>, resourceGroupName: Http.Path<string>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults
     * @tag Vaults
     * @param __top - Maximum number of results to return.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Get information about all key vaults in the specified subscription.
     * @since 2019-09-01
     */
    ListBySubscription(body?: Http.Body<file, 'application/json'>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Gets information about the deleted vaults in a subscription.
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults
     * @tag Vaults
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Retrieved information about all deleted key vaults in a subscription.
     * @since 2019-09-01
     */
    ListDeleted(body?: Http.Body<file, 'application/json'>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Gets the deleted Azure key vault.
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}
     * @tag Vaults
     * @param vaultName - The name of the vault.
     * @param location - The location of the deleted vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Retrieved information about the deleted vault.
     * @since 2019-09-01
     */
    GetDeleted(body?: Http.Body<file, 'application/json'>, vaultName: Http.Path<string>, location: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge
     * @tag Vaults
     * @param vaultName - The name of the soft-deleted vault.
     * @param location - The location of the soft-deleted vault.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - The vault is purged.
     * @return 202 - Vault is being purged.
     * @since 2019-09-01
     */
    PurgeDeleted(body?: Http.Body<file, 'application/json'>, vaultName: Http.Path<string>, location: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', any, 'application/json'> | Http.Response<'202', any, 'application/json'>;
    /**
     * @description The List operation gets information about the vaults associated with the subscription.
     * @http GET /subscriptions/{subscriptionId}/resources
     * @tag Vaults
     * @param __filter - The filter to apply on the operation.
     * @param __top - Maximum number of results to return.
     * @param api_version - Azure Resource Manager Api Version.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Get information about all key vaults in the subscription.
     * @since 2019-09-01
     */
    List(__filter: Http.Query<"resourceType eq 'Microsoft.KeyVault/vaults'", '$filter'>, __top?: Http.Query<int32, '$top'>, api_version: Http.Query<"2015-11-01", 'api-version'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
    /**
     * @description Checks that the vault name is valid and is not already in use.
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability
     * @tag Vaults
     * @param api_version - Client Api Version.
     * @param vaultName - The name of the vault.
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - OK -- Operation to check the vault name availability was successful.
     * @since 2019-09-01
     */
    CheckNameAvailability(api_version: Http.Query<string, 'api-version'>, vaultName: Http.Body<schema, 'application/json'>, subscriptionId: Http.Path<string>): Http.Response<'200', schema, 'application/json'>;
}

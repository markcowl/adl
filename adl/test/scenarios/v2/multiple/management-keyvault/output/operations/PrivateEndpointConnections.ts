import { schema } from '../aliases/schema';
export interface PrivateEndpointConnections {
    /**
     * @description Gets the specified private endpoint connection associated with the key vault.
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}
     * @tag PrivateEndpointConnections
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
     * @param api_version - Client Api Version.
     * @return 200 - Private endpoint connection successfully returned.
     * @return default - Error response describing why the operation failed.
     * @since 2019-09-01
     */
    Get(subscriptionId: Http.Path<string>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, privateEndpointConnectionName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>): Http.Response<'200', schema, 'application/json'> | Http.Response<Http.Default, schema, 'application/json'>;
    /**
     * @description Updates the specified private endpoint connection associated with the key vault.
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}
     * @tag PrivateEndpointConnections
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
     * @param api_version - Client Api Version.
     * @param properties - The intended state of private endpoint connection.
     * @return 200 - The state of private endpoint connection was updated successfully.
     * @return default - Error response describing why the operation failed.
     * @since 2019-09-01
     */
    Put(subscriptionId: Http.Path<string>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, privateEndpointConnectionName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>, properties: Http.Body<schema, 'application/json'>): Http.Response<'200', schema, 'application/json'> | Http.Response<Http.Default, schema, 'application/json'>;
    /**
     * @description Deletes the specified private endpoint connection associated with the key vault.
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}
     * @tag PrivateEndpointConnections
     * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param resourceGroupName - Name of the resource group that contains the key vault.
     * @param vaultName - The name of the key vault.
     * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
     * @param api_version - Client Api Version.
     * @return 200 - The private endpoint connection was successfully deleted.
     * @return 202 - The private endpoint connection is being deleted.
     * @return 204 - The private endpoint connection does not exist.
     * @return default - Error response describing why the operation failed.
     * @since 2019-09-01
     */
    Delete(subscriptionId: Http.Path<string>, resourceGroupName: Http.Path<string>, vaultName: Http.Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">>, privateEndpointConnectionName: Http.Path<string>, api_version: Http.Query<string, 'api-version'>): Http.Response<'200', schema, 'application/json'> | Http.Response<'202', any, 'application/json'> | Http.Response<'204', any, 'application/json'> | Http.Response<Http.Default, schema, 'application/json'>;
}

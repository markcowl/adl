import { ApiVersionParameter } from "../aliases/ApiVersionParameter";
import { SubscriptionIdParameter } from "../aliases/SubscriptionIdParameter";
import { RedisLinkedServerWithProperties } from "../models/RedisLinkedServerWithProperties";
import { RedisLinkedServerCreateParameters } from "../models/RedisLinkedServerCreateParameters";
import { RedisLinkedServerWithPropertiesList } from "../models/RedisLinkedServerWithPropertiesList";
export interface LinkedServer {
    /**
     * @description Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName}
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the redis cache.
     * @param linkedServerName - The name of the linked server.
     * @return 200 - Response of get linked server.
     */
    Get(resourceGroupName: string, name: string, linkedServerName: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, body?: Body<file, "application/json">): [(code: 200, mediaType: "application/json") => {
        body: RedisLinkedServerWithProperties;
    }];
    /**
     * @description Adds a linked server to the Redis cache (requires Premium SKU).
     * @since 2018-03-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName}
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param linkedServerName - The name of the linked server that is being added to the Redis cache.
     * @param parameters - Parameters supplied to the Create Linked server operation.
     * @return 200 - The linked server was successfully added.
     * @return 201 - The linked server was successfully added.
     */
    Create(resourceGroupName: string, name: string, linkedServerName: string, parameters: Body<RedisLinkedServerCreateParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisLinkedServerWithProperties;
    }, (code: 201, mediaType: "application/json") => {
        body: RedisLinkedServerWithProperties;
    }];
    /**
     * @description Deletes the linked server from a redis cache (requires Premium SKU).
     * @since 2018-03-01
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName}
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the redis cache.
     * @param linkedServerName - The name of the linked server that is being added to the Redis cache.
     * @return 200 - Linked server was successfully deleted.
     */
    Delete(resourceGroupName: string, name: string, linkedServerName: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, body?: Body<file, "application/json">): [(code: 200, mediaType: "application/json") => {}];
    /**
     * @description Gets the list of linked servers associated with this redis cache (requires Premium SKU).
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the redis cache.
     * @return 200 - Response of get linked servers.
     */
    List(resourceGroupName: string, name: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, body?: Body<file, "application/json">): [(code: 200, mediaType: "application/json") => {
        body: RedisLinkedServerWithPropertiesList;
    }];
}

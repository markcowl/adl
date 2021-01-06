import { CheckNameAvailabilityParameters } from "../models/CheckNameAvailabilityParameters";
import { ApiVersionParameter } from "../aliases/ApiVersionParameter";
import { SubscriptionIdParameter } from "../aliases/SubscriptionIdParameter";
import { NotificationListResponse } from "../models/NotificationListResponse";
import { RedisResource } from "../models/RedisResource";
import { RedisCreateParameters } from "../models/RedisCreateParameters";
import { RedisUpdateParameters } from "../models/RedisUpdateParameters";
import { RedisListResult } from "../models/RedisListResult";
import { RedisAccessKeys } from "../models/RedisAccessKeys";
import { RedisRegenerateKeyParameters } from "../models/RedisRegenerateKeyParameters";
import { RedisRebootParameters } from "../models/RedisRebootParameters";
import { RedisForceRebootResponse } from "../models/RedisForceRebootResponse";
import { ImportRDBParameters } from "../models/ImportRDBParameters";
import { ExportRDBParameters } from "../models/ExportRDBParameters";
export interface Redis {
    /**
     * @description Checks that the redis cache name is valid and is not already in use.
     * @since 2018-03-01
     * @http POST /subscriptions/{subscriptionId}/providers/Microsoft.Cache/CheckNameAvailability
     * @tag Redis
     * @param parameters - Parameters supplied to the CheckNameAvailability Redis operation. The only supported resource type is 'Microsoft.Cache/redis'
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Name is available
     */
    CheckNameAvailability(parameters: Body<CheckNameAvailabilityParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {}];
    /**
     * @description Gets any upgrade notifications for a Redis cache.
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/listUpgradeNotifications
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @param history - how many minutes in past to look for upgrade notifications
     * @return 200 - All upgrade notifications in given time range
     */
    ListUpgradeNotifications(resourceGroupName: string, name: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, history: Query<double>): [(code: 200, mediaType: "application/json") => {
        body: NotificationListResponse;
    }];
    /**
     * @description Gets a Redis cache (resource description).
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - The redis cache was successfully found.
     */
    Get(resourceGroupName: string, name: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisResource;
    }];
    /**
     * @description Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
     * @since 2018-03-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param parameters - Parameters supplied to the Create Redis operation.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - The existing redis cache was successfully updated. Check provisioningState to see detailed status.
     * @return 201 - The new redis cache was successfully created. Check provisioningState to see detailed status.
     */
    Create(resourceGroupName: string, name: string, parameters: Body<RedisCreateParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisResource;
    }, (code: 201, mediaType: "application/json") => {
        body: RedisResource;
    }];
    /**
     * @description Deletes a Redis cache.
     * @since 2018-03-01
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - The redis cache was successfully deleted.
     * @return 202 - The redis cache 'delete' operation was successfully enqueued; follow the Location header to poll for final outcome.
     * @return 204 - The redis cache was successfully deleted.
     */
    Delete(resourceGroupName: string, name: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {}, (code: 202, mediaType: "application/json") => {}, (code: 204, mediaType: "application/json") => {}];
    /**
     * @description Update an existing Redis cache.
     * @since 2018-03-01
     * @http PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param parameters - Parameters supplied to the Update Redis operation.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - The existing redis cache was successfully updated. Check provisioningState to see detailed status.
     */
    Update(resourceGroupName: string, name: string, parameters: Body<RedisUpdateParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisResource;
    }];
    /**
     * @description Lists all Redis caches in a resource group.
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     */
    ListByResourceGroup(resourceGroupName: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisListResult;
    }];
    /**
     * @description Gets all Redis caches in the specified subscription.
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/providers/Microsoft.Cache/Redis
     * @tag Redis
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     */
    List(api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisListResult;
    }];
    /**
     * @description Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
     * @since 2018-03-01
     * @http POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/listKeys
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Lists the keys for the specified Redis cache.
     */
    ListKeys(resourceGroupName: string, name: string, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisAccessKeys;
    }];
    /**
     * @description Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.
     * @since 2018-03-01
     * @http POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/regenerateKey
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param parameters - Specifies which key to regenerate.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Lists the regenerated keys for Redis Cache
     */
    RegenerateKey(resourceGroupName: string, name: string, parameters: Body<RedisRegenerateKeyParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisAccessKeys;
    }];
    /**
     * @description Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
     * @since 2018-03-01
     * @http POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/forceReboot
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param parameters - Specifies which Redis node(s) to reboot.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Reboot operation successfully enqueued
     */
    ForceReboot(resourceGroupName: string, name: string, parameters: Body<RedisRebootParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisForceRebootResponse;
    }];
    /**
     * @description Import data into Redis cache.
     * @since 2018-03-01
     * @http POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/import
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param parameters - Parameters for Redis import operation.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Import operation succeeded.
     * @return 202 - Import operation successfully enqueued; follow the Location header to poll for final outcome.
     * @return 204 - Import operation succeeded.
     */
    ImportData(resourceGroupName: string, name: string, parameters: Body<ImportRDBParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {}, (code: 202, mediaType: "application/json") => {}, (code: 204, mediaType: "application/json") => {}];
    /**
     * @description Export data from the redis cache to blobs in a container.
     * @since 2018-03-01
     * @http POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/export
     * @tag Redis
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param parameters - Parameters for Redis export operation.
     * @param api_version - Client Api Version.
     * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
     * @return 200 - Export operation succeeded.
     * @return 202 - Export operation successfully enqueued; follow the Location header to poll for final outcome.
     * @return 204 - Export operation succeeded.
     */
    ExportData(resourceGroupName: string, name: string, parameters: Body<ExportRDBParameters, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {}, (code: 202, mediaType: "application/json") => {}, (code: 204, mediaType: "application/json") => {}];
}

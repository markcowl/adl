import { ApiVersionParameter } from "../aliases/ApiVersionParameter";
import { SubscriptionIdParameter } from "../aliases/SubscriptionIdParameter";
import { RedisPatchScheduleListResult } from "../models/RedisPatchScheduleListResult";
import { defaultName } from "../enums/defaultName";
import { RedisPatchSchedule } from "../models/RedisPatchSchedule";
export interface PatchSchedules {
    /**
     * @description Gets all patch schedules in the specified redis cache (there is only one).
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/patchSchedules
     * @tag Redis
     * @tag PatchSchedules
     * @param resourceGroupName - The name of the resource group.
     * @param cacheName - The name of the Redis cache.
     * @return 200 - Successfully got the current patch schedules
     */
    ListByRedisResource(api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter, resourceGroupName: string, cacheName: string): [(code: 200, mediaType: "application/json") => {
        body: RedisPatchScheduleListResult;
    }];
    /**
     * @description Gets the patching schedule of a redis cache (requires Premium SKU).
     * @since 2018-03-01
     * @http GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}
     * @tag Redis
     * @tag PatchSchedules
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the redis cache.
     * @param _default - Default string modeled as parameter for auto generation to work correctly.
     * @return 200 - Response of get patch schedules.
     */
    Get(resourceGroupName: string, name: string, _default: Path<defaultName, "default">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisPatchSchedule;
    }];
    /**
     * @description Create or replace the patching schedule for Redis cache (requires Premium SKU).
     * @since 2018-03-01
     * @http PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}
     * @tag Redis
     * @tag PatchSchedules
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the Redis cache.
     * @param _default - Default string modeled as parameter for auto generation to work correctly.
     * @param parameters - Parameters to set the patching schedule for Redis cache.
     * @return 200 - The patch schedule was successfully updated.
     * @return 201 - The patch schedule was successfully created.
     */
    CreateOrUpdate(resourceGroupName: string, name: string, _default: Path<defaultName, "default">, parameters: Body<RedisPatchSchedule, "application/json">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {
        body: RedisPatchSchedule;
    }, (code: 201, mediaType: "application/json") => {
        body: RedisPatchSchedule;
    }];
    /**
     * @description Deletes the patching schedule of a redis cache (requires Premium SKU).
     * @since 2018-03-01
     * @http DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}
     * @tag Redis
     * @tag PatchSchedules
     * @param resourceGroupName - The name of the resource group.
     * @param name - The name of the redis cache.
     * @param _default - Default string modeled as parameter for auto generation to work correctly.
     * @return 200 - Success.
     * @return 204 - Success.
     */
    Delete(resourceGroupName: string, name: string, _default: Path<defaultName, "default">, api_version: ApiVersionParameter, subscriptionId: SubscriptionIdParameter): [(code: 200, mediaType: "application/json") => {}, (code: 204, mediaType: "application/json") => {}];
}

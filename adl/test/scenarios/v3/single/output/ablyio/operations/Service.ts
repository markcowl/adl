export interface Service {
    /**
     * Enumerate all active channels of the application
     * @description Enumerate all active channels of the application
     * @http GET /channels
     * @tag Status
     * @since 1.1.0
     */
    getMetadataOfAllChannels(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, limit?: Http.Query<int64>, prefix?: Http.Query<string>, by?: Http.Query<"value" | "id">);
    /**
     * Get metadata of a channel
     * @description Get metadata of a channel
     * @http GET /channels/{channel_id}
     * @tag Status
     * @since 1.1.0
     */
    getMetadataOfChannel(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'channel_id'>);
    /**
     * Get message history for a channel
     * @description Get message history for a channel
     * @http GET /channels/{channel_id}/messages
     * @tag History
     * @since 1.1.0
     */
    getMessagesByChannel(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'channel_id'>, _1?: Http.Query<string, 'start'>, _2?: Http.Query<int64, 'limit'>, _3?: Http.Query<string, 'end'>, _4?: Http.Query<"forwards" | "backwards", 'direction'>);
    /**
     * Publish a message to a channel
     * @description Publish a message to the specified channel
     * @http POST /channels/{channel_id}/messages
     * @tag Publishing
     * @since 1.1.0
     */
    publishMessagesToChannel(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'channel_id'>);
    /**
     * Get presence of a channel
     * @description Get presence on a channel
     * @http GET /channels/{channel_id}/presence
     * @tag Status
     * @since 1.1.0
     */
    getPresenceOfChannel(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'channel_id'>, clientId?: Http.Query<string>, connectionId?: Http.Query<string>, limit?: Http.Query<int64>);
    /**
     * Get presence history of a channel
     * @description Get presence on a channel
     * @http GET /channels/{channel_id}/presence/history
     * @tag History
     * @since 1.1.0
     */
    getPresenceHistoryOfChannel(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'channel_id'>, _1?: Http.Query<string, 'start'>, _2?: Http.Query<int64, 'limit'>, _3?: Http.Query<string, 'end'>, _4?: Http.Query<"forwards" | "backwards", 'direction'>);
    /**
     * Request an access token
     * @description This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.
     * @http POST /keys/{keyName}/requestToken
     * @tag Authentication
     * @since 1.1.0
     */
    requestAccessToken(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'keyName'>);
    /**
     * List channel subscriptions
     * @description Get a list of push notification subscriptions to channels.
     * @http GET /push/channelSubscriptions
     * @tag Push
     * @since 1.1.0
     */
    getPushSubscriptionsOnChannels(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, channel?: Http.Query<string>, deviceId?: Http.Query<string>, clientId?: Http.Query<string>, limit?: Http.Query<int64 & Maximum<1000>>);
    /**
     * Subscribe a device to a channel
     * @description Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
     * @http POST /push/channelSubscriptions
     * @tag Push
     * @since 1.1.0
     */
    subscribePushDeviceToChannel(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>);
    /**
     * Delete a registered device's update token
     * @description Delete a device details object.
     * @http DELETE /push/channelSubscriptions
     * @tag Push
     * @since 1.1.0
     */
    deletePushDeviceDetails(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, channel?: Http.Query<string>, deviceId?: Http.Query<string>, clientId?: Http.Query<string>);
    /**
     * List all channels with at least one subscribed device
     * @description Returns a paginated response of channel names.
     * @http GET /push/channels
     * @tag Push
     * @since 1.1.0
     */
    getChannelsWithPushSubscribers(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>);
    /**
     * List devices registered for receiving push notifications
     * @description List of device details of devices registed for push notifications.
     * @http GET /push/deviceRegistrations
     * @tag Push
     * @since 1.1.0
     */
    getRegisteredPushDevices(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, deviceId?: Http.Query<string>, clientId?: Http.Query<string>, limit?: Http.Query<int64 & Maximum<1000>>);
    /**
     * Register a device for receiving push notifications
     * @description Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
     * @http POST /push/deviceRegistrations
     * @tag Push
     * @since 1.1.0
     */
    registerPushDevice(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>);
    /**
     * Unregister matching devices for push notifications
     * @description Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.
     * @http DELETE /push/deviceRegistrations
     * @tag Push
     * @since 1.1.0
     */
    unregisterAllPushDevices(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, deviceId?: Http.Query<string>, clientId?: Http.Query<string>);
    /**
     * Get a device registration
     * @description Get the full details of a device.
     * @http GET /push/deviceRegistrations/{device_id}
     * @tag Push
     * @since 1.1.0
     */
    getPushDeviceDetails(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'device_id'>);
    /**
     * Update a device registration
     * @description Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
     * @http PUT /push/deviceRegistrations/{device_id}
     * @tag Push
     * @since 1.1.0
     */
    putPushDeviceDetails(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'device_id'>);
    /**
     * Unregister a single device for push notifications
     * @description Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
     * @http DELETE /push/deviceRegistrations/{device_id}
     * @tag Push
     * @since 1.1.0
     */
    unregisterPushDevice(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'device_id'>);
    /**
     * Update a device registration
     * @description Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
     * @http PATCH /push/deviceRegistrations/{device_id}
     * @tag Push
     * @since 1.1.0
     */
    patchPushDeviceDetails(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'device_id'>);
    /**
     * Reset a registered device's update token
     * @description Gets an updated device details object.
     * @http GET /push/deviceRegistrations/{device_id}/resetUpdateToken
     * @tag Push
     * @since 1.1.0
     */
    updatePushDeviceDetails(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0: Http.Path<string, 'device_id'>);
    /**
     * Publish a push notification to device(s)
     * @description A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
     * @http POST /push/publish
     * @tag Push
     * @since 1.1.0
     */
    publishPushNotificationToDevices(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>);
    /**
     * Retrieve usage statistics for an application
     * @description The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.
     * @http GET /stats
     * @tag Stats
     * @since 1.1.0
     */
    getStats(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>, _0?: Http.Query<string, 'start'>, _1?: Http.Query<int64, 'limit'>, _2?: Http.Query<string, 'end'>, _3?: Http.Query<"forwards" | "backwards", 'direction'>, unit?: Http.Query<"minute" | "hour" | "day" | "month">);
    /**
     * Get the service time
     * @description This returns the service time in milliseconds since the epoch.
     * @http GET /time
     * @tag Stats
     * @since 1.1.0
     */
    getTime(_0?: Http.Header<string, 'X-Ably-Version'>, _1?: Http.Query<"json" | "jsonp" | "msgpack" | "html", 'format'>);
}

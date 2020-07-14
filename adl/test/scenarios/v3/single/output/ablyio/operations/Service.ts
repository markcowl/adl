export interface Service {
    /**
     * Enumerate all active channels of the application
     * @description Enumerate all active channels of the application
     * @since 1.1.0
     * @http GET /channels
     * @tag Status
     * @param prefix - Optionally limits the query to only those channels whose name starts with the given prefix
     * @param by - optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)
     * @return 2XX - OK
     */
    getMetadataOfAllChannels(X_Ably_Version?: versionHeader, format?: responseFormat, limit?: Query<int64>, prefix?: Query<string>, by?: Query<"value" | "id">): [[(code: "2XX", mediaType: "application/json") => {
        body: Xor<Array<ChannelDetails>, Array<string>>;
        headers: [Link<"link">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Xor<Array<ChannelDetails>, Array<string>>;
        headers: [Link<"link">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
        headers: [Link<"link">];
    }], Error<"default", true>];
    /**
     * Get metadata of a channel
     * @description Get metadata of a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}
     * @tag Status
     * @return 200 - OK
     */
    getMetadataOfChannel(X_Ably_Version?: versionHeader, format?: responseFormat, channel_id: channelId): [(code: 200, mediaType: "application/json") => {
        body: ChannelDetails;
        headers: [ServerId<"x-ably-serverid">];
    }, Error<"default", true>];
    /**
     * Get message history for a channel
     * @description Get message history for a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/messages
     * @tag History
     * @return 2XX - OK
     * @return default - Error
     */
    getMessagesByChannel(X_Ably_Version?: versionHeader, format?: responseFormat, channel_id: channelId, start?: filterStart, limit?: filterLimit, end?: filterEnd, direction?: filterDirection): [[(code: "2XX", mediaType: "application/json") => {
        body: Array<Message>;
        headers: [Link<"link">, ServerId<"x-ably-serverid">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<Message>;
        headers: [Link<"link">, ServerId<"x-ably-serverid">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
        headers: [Link<"link">, ServerId<"x-ably-serverid">];
    }], () => {
        headers: [ErrorCode<"x-ably-errorcode">, ErrorMessage<"x-ably-errormessage">, ServerId<"x-ably-serverid">];
        isException: true;
    }];
    /**
     * Publish a message to a channel
     * @description Publish a message to the specified channel
     * @since 1.1.0
     * @http POST /channels/{channel_id}/messages
     * @tag Publishing
     * @return 2XX - OK
     */
    publishMessagesToChannel(X_Ably_Version?: versionHeader, format?: responseFormat, channel_id: channelId, body?: Body<Message, "application/json"> | Body<Message, "application/x-msgpack"> | Body<Message, "application/x-www-form-urlencoded">): [[(code: "2XX", mediaType: "application/json") => {
        body: {
            channel?: string;
            messageId?: string;
        };
        headers: [ServerId<"x-ably-serverid">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: {
            channel?: string;
            messageId?: string;
        };
        headers: [ServerId<"x-ably-serverid">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: {
            channel?: string;
            messageId?: string;
        };
        headers: [ServerId<"x-ably-serverid">];
    }], Error<"default", true>];
    /**
     * Get presence of a channel
     * @description Get presence on a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/presence
     * @tag Status
     * @return 200 - OK
     */
    getPresenceOfChannel(X_Ably_Version?: versionHeader, format?: responseFormat, channel_id: channelId, clientId?: Query<string>, connectionId?: Query<string>, limit?: Query<int64>): [[(code: 200, mediaType: "application/json") => {
        body: Array<PresenceMessage>;
        headers: [Link<"link">, ServerId<"x-ably-serverid">];
    }, (code: 200, mediaType: "application/x-msgpack") => {
        body: Array<PresenceMessage>;
        headers: [Link<"link">, ServerId<"x-ably-serverid">];
    }, (code: 200, mediaType: "text/html") => {
        body: string;
        headers: [Link<"link">, ServerId<"x-ably-serverid">];
    }], Error<"default", true>];
    /**
     * Get presence history of a channel
     * @description Get presence on a channel
     * @since 1.1.0
     * @http GET /channels/{channel_id}/presence/history
     * @tag History
     * @return 2XX - OK
     */
    getPresenceHistoryOfChannel(X_Ably_Version?: versionHeader, format?: responseFormat, channel_id: channelId, start?: filterStart, limit?: filterLimit, end?: filterEnd, direction?: filterDirection): [[(code: "2XX", mediaType: "application/json") => {
        body: Array<PresenceMessage>;
        headers: [Link<"link">];
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<PresenceMessage>;
        headers: [Link<"link">];
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
        headers: [Link<"link">];
    }], Error<"default", true>];
    /**
     * Request an access token
     * @description This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.
     * @since 1.1.0
     * @http POST /keys/{keyName}/requestToken
     * @tag Authentication
     * @return 2XX - OK
     */
    requestAccessToken(X_Ably_Version?: versionHeader, format?: responseFormat, keyName: key_name, body?: Body<Xor<TokenRequest, SignedTokenRequest>, "application/json">): [[(code: "2XX", mediaType: "application/json") => {
        body: TokenDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: TokenDetails;
    }], Error<"default", true>];
    /**
     * List channel subscriptions
     * @description Get a list of push notification subscriptions to channels.
     * @since 1.1.0
     * @http GET /push/channelSubscriptions
     * @tag Push
     * @param channel - Filter to restrict to subscriptions associated with that channel.
     * @param deviceId - Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
     * @param clientId - Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
     * @param limit - The maximum number of records to return.
     * @return 2XX - OK
     */
    getPushSubscriptionsOnChannels(X_Ably_Version?: versionHeader, format?: responseFormat, channel?: Query<string>, deviceId?: Query<string>, clientId?: Query<string>, limit?: Query<int64 & Maximum<1000>>): [(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, Error<"default", true>];
    /**
     * Subscribe a device to a channel
     * @description Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
     * @since 1.1.0
     * @http POST /push/channelSubscriptions
     * @tag Push
     * @return 2XX - OK
     */
    subscribePushDeviceToChannel(X_Ably_Version?: versionHeader, format?: responseFormat, body?: Body<Xor<{
        channel?: string;
        deviceId?: string;
    }, {
        channel?: string;
        clientId?: string;
    }>, "application/json"> | Body<Xor<{
        channel?: string;
        deviceId?: string;
    }, {
        channel?: string;
        clientId?: string;
    }>, "application/x-msgpack"> | Body<Xor<{
        channel?: string;
        deviceId?: string;
    }, {
        channel?: string;
        clientId?: string;
    }>, "application/x-www-form-urlencoded">): [(code: "2XX") => {}, Error<"default", true>];
    /**
     * Delete a registered device's update token
     * @description Delete a device details object.
     * @since 1.1.0
     * @http DELETE /push/channelSubscriptions
     * @tag Push
     * @param channel - Filter to restrict to subscriptions associated with that channel.
     * @param deviceId - Must be set when clientId is empty, cannot be used with clientId.
     * @param clientId - Must be set when deviceId is empty, cannot be used with deviceId.
     * @return 2XX - OK
     */
    deletePushDeviceDetails(X_Ably_Version?: versionHeader, format?: responseFormat, channel?: Query<string>, deviceId?: Query<string>, clientId?: Query<string>): [(code: "2XX") => {}, Error<"default", true>];
    /**
     * List all channels with at least one subscribed device
     * @description Returns a paginated response of channel names.
     * @since 1.1.0
     * @http GET /push/channels
     * @tag Push
     * @return 2XX - OK
     */
    getChannelsWithPushSubscribers(X_Ably_Version?: versionHeader, format?: responseFormat): [[(code: "2XX", mediaType: "application/json") => {
        body: Array<string>;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<string>;
    }, (code: "2XX", mediaType: "text/html") => {
        body: Array<string>;
    }], Error<"default", true>];
    /**
     * List devices registered for receiving push notifications
     * @description List of device details of devices registed for push notifications.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations
     * @tag Push
     * @param deviceId - Optional filter to restrict to devices associated with that deviceId.
     * @param clientId - Optional filter to restrict to devices associated with that clientId.
     * @param limit - The maximum number of records to return.
     * @return 2XX - OK
     */
    getRegisteredPushDevices(X_Ably_Version?: versionHeader, format?: responseFormat, deviceId?: Query<string>, clientId?: Query<string>, limit?: Query<int64 & Maximum<1000>>): [[(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }], Error<"default", true>];
    /**
     * Register a device for receiving push notifications
     * @description Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
     * @since 1.1.0
     * @http POST /push/deviceRegistrations
     * @tag Push
     * @return 2XX - OK
     */
    registerPushDevice(X_Ably_Version?: versionHeader, format?: responseFormat, body?: Body<DeviceDetails, "application/json"> | Body<DeviceDetails, "application/x-msgpack">): [[(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }], Error<"default", true>];
    /**
     * Unregister matching devices for push notifications
     * @description Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.
     * @since 1.1.0
     * @http DELETE /push/deviceRegistrations
     * @tag Push
     * @param deviceId - Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
     * @param clientId - Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
     * @return 2XX - OK
     */
    unregisterAllPushDevices(X_Ably_Version?: versionHeader, format?: responseFormat, deviceId?: Query<string>, clientId?: Query<string>): [(code: "2XX") => {}, Error<"default", true>];
    /**
     * Get a device registration
     * @description Get the full details of a device.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations/{device_id}
     * @tag Push
     * @return 2XX - OK
     */
    getPushDeviceDetails(X_Ably_Version?: versionHeader, format?: responseFormat, device_id: deviceId): [[(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }], Error<"default", true>];
    /**
     * Update a device registration
     * @description Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
     * @since 1.1.0
     * @http PUT /push/deviceRegistrations/{device_id}
     * @tag Push
     * @return 2XX - OK
     */
    putPushDeviceDetails(X_Ably_Version?: versionHeader, format?: responseFormat, device_id: deviceId, body?: Body<DeviceDetails, "application/json"> | Body<DeviceDetails, "application/x-msgpack"> | Body<DeviceDetails, "application/x-www-form-urlencoded">): [[(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }], Error<"default", true>];
    /**
     * Unregister a single device for push notifications
     * @description Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
     * @since 1.1.0
     * @http DELETE /push/deviceRegistrations/{device_id}
     * @tag Push
     * @return 2XX - OK
     */
    unregisterPushDevice(X_Ably_Version?: versionHeader, format?: responseFormat, device_id: deviceId): [(code: "2XX") => {}, Error<"default", true>];
    /**
     * Update a device registration
     * @description Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
     * @since 1.1.0
     * @http PATCH /push/deviceRegistrations/{device_id}
     * @tag Push
     * @return 2XX - OK
     */
    patchPushDeviceDetails(X_Ably_Version?: versionHeader, format?: responseFormat, device_id: deviceId, body?: Body<DeviceDetails, "application/json"> | Body<DeviceDetails, "application/x-msgpack"> | Body<DeviceDetails, "application/x-www-form-urlencoded">): [[(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }], Error<"default", true>];
    /**
     * Reset a registered device's update token
     * @description Gets an updated device details object.
     * @since 1.1.0
     * @http GET /push/deviceRegistrations/{device_id}/resetUpdateToken
     * @tag Push
     * @return 2XX - OK
     */
    updatePushDeviceDetails(X_Ably_Version?: versionHeader, format?: responseFormat, device_id: deviceId): [[(code: "2XX", mediaType: "application/json") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: DeviceDetails;
    }, (code: "2XX", mediaType: "text/html") => {
        body: DeviceDetails;
    }], Error<"default", true>];
    /**
     * Publish a push notification to device(s)
     * @description A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
     * @since 1.1.0
     * @http POST /push/publish
     * @tag Push
     * @return 2XX - OK
     */
    publishPushNotificationToDevices(X_Ably_Version?: versionHeader, format?: responseFormat, body?: Body<{
        push?: Push;
        recipient: Recipient;
    }, "application/json"> | Body<{
        push?: Push;
        recipient: Recipient;
    }, "application/x-msgpack"> | Body<{
        push?: Push;
        recipient: Recipient;
    }, "application/x-www-form-urlencoded">): [(code: "2XX") => {}, Error<"default", true>];
    /**
     * Retrieve usage statistics for an application
     * @description The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.
     * @since 1.1.0
     * @http GET /stats
     * @tag Stats
     * @param unit - Specifies the unit of aggregation in the returned results.
     * @return 2XX - OK
     */
    getStats(X_Ably_Version?: versionHeader, format?: responseFormat, start?: filterStart, limit?: filterLimit, end?: filterEnd, direction?: filterDirection, unit?: Query<"minute" | "hour" | "day" | "month">): [(code: "2XX", mediaType: "application/json") => {
        body: {};
    }, Error<"default", true>];
    /**
     * Get the service time
     * @description This returns the service time in milliseconds since the epoch.
     * @since 1.1.0
     * @http GET /time
     * @tag Stats
     * @return 2XX - OK
     */
    getTime(X_Ably_Version?: versionHeader, format?: responseFormat): [[(code: "2XX", mediaType: "application/json") => {
        body: Array<int64>;
    }, (code: "2XX", mediaType: "application/x-msgpack") => {
        body: Array<int64>;
    }, (code: "2XX", mediaType: "text/html") => {
        body: string;
    }], Error<"default", true>];
}

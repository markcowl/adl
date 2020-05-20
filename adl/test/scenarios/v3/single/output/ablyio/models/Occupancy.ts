
/**
 * @description An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
 */
export interface Occupancy {
    /**
     * @description The number of connections that are authorised to enter members into the presence channel.
     */
    presenceConnections: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of members currently entered into the presence channel.
     */
    presenceMembers: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of connections that are authorised to subscribe to presence messages.
     */
    presenceSubscribers: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of connections attached to the channel that are authorised to publish.
     */
    publishers: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of connections attached that are authorised to subscribe to messages.
     */
    subscribers: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

import { ChannelStatus } from './ChannelStatus';
export interface ChannelDetails {
    /**
     * @description The required name of the channel including any qualifier, if any.
     */
    channelId?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel.
     */
    isGlobalMaster: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description In events relating to the activity of a channel in a specific region, this optionally identifies the region.
     */
    region: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    status: ChannelStatus;
}

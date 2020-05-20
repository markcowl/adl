import { Occupancy } from './Occupancy';
/**
 * @description A ChannelStatus instance.
 */
export interface ChannelStatus {
    /**
     * @description A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
     */
    isActive?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    occupancy: Occupancy;
}

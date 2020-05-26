import { ChannelStatus } from './ChannelStatus';
/**
 * @since 1.1.0
 */
export interface ChannelDetails {
    /** @since 1.1.0 */
    channelId?: string;
    /** @since 1.1.0 */
    isGlobalMaster: boolean;
    /** @since 1.1.0 */
    region: string;
    /**
     * @since 1.1.0
     */
    status: ChannelStatus;
}

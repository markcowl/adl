import { Occupancy } from './Occupancy';
/** @since 1.1.0 */
export interface ChannelStatus {
    /** @since 1.1.0 */
    isActive?: boolean;
    /**
     * @since 1.1.0
     */
    occupancy: Occupancy;
}

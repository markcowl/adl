import { Resource } from './Resource';
import { NotificationContractProperties } from './NotificationContractProperties';
/** @since 2019-12-01 */
export interface NotificationContract extends Resource {
    /** @since 2019-12-01 */
    properties: NotificationContractProperties;
}

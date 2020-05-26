import { RecipientsContractProperties } from './RecipientsContractProperties';
/** @since 2019-12-01 */
export interface NotificationContractProperties {
    /** @since 2019-12-01 */
    title?: string & MaxLength<1000> & MinLength<1>;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    recipients: RecipientsContractProperties;
}

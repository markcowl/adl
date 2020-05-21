
/**
 * @description Notification Parameter contract.
 */
export interface RecipientsContractProperties {
    /**
     * @description List of Emails subscribed for the notification.
     */
    emails: Array<string>;
    /**
     * @description List of Users subscribed for the notification.
     */
    users: Array<string>;
}

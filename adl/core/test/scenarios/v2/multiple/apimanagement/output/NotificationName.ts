/** @description Notification Name Identifier.
 * @extensible
 */
export enum NotificationName {
    /** The following email recipients and users will receive email notifications about subscription requests for API products requiring approval. */
    RequestPublisherNotificationMessage = 'RequestPublisherNotificationMessage',
    /** The following email recipients and users will receive email notifications about new API product subscriptions. */
    PurchasePublisherNotificationMessage = 'PurchasePublisherNotificationMessage',
    /** The following email recipients and users will receive email notifications when new applications are submitted to the application gallery. */
    NewApplicationNotificationMessage = 'NewApplicationNotificationMessage',
    /** The following recipients will receive blind carbon copies of all emails sent to developers. */
    BCC = 'BCC',
    /** The following email recipients and users will receive email notifications when a new issue or comment is submitted on the developer portal. */
    NewIssuePublisherNotificationMessage = 'NewIssuePublisherNotificationMessage',
    /** The following email recipients and users will receive email notifications when developer closes his account. */
    AccountClosedPublisher = 'AccountClosedPublisher',
    /** The following email recipients and users will receive email notifications when subscription usage gets close to usage quota. */
    QuotaLimitApproachingPublisherNotificationMessage = 'QuotaLimitApproachingPublisherNotificationMessage'
}


/**
 * Notify change in Subscription State.
 *  - If false, do not send any email notification for change of state of subscription
 *  - If true, send email notification of change of state of subscription
 */
export type NotifySubscriptionStateChangeParameter = Query<boolean, "notify">;

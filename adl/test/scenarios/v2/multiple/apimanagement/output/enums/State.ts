
/**
 * @extensible
 * @description Status of the issue.
 * @since 2019-12-01
 */
export enum State {
    /** The issue is proposed. */
    proposed = "proposed",
    /** The issue is opened. */
    open = "open",
    /** The issue was removed. */
    removed = "removed",
    /** The issue is now resolved. */
    resolved = "resolved",
    /** The issue was closed. */
    closed = "closed"
}

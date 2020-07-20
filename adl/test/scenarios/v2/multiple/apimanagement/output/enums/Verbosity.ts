
/**
 * @extensible
 * @description The verbosity level applied to traces emitted by trace policies.
 * @since 2019-12-01
 */
export enum Verbosity {
    /** All the traces emitted by trace policies will be sent to the logger attached to this diagnostic instance. */
    verbose = "verbose",
    /** Traces with 'severity' set to 'information' and 'error' will be sent to the logger attached to this diagnostic instance. */
    information = "information",
    /** Only traces with 'severity' set to 'error' will be sent to the logger attached to this diagnostic instance. */
    error = "error"
}

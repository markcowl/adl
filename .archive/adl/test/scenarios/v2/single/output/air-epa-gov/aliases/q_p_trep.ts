
/**
 * Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
 * - NONE = Never has reported to TRI.
 * - CURR = Current TRI reporter.
 * - NONCURR = Has reported to TRI in the past but not for the current reporting year.
 */
export type q_p_trep = Query<"NONE" | "CURR" | "NOTCURR", "p_trep">;

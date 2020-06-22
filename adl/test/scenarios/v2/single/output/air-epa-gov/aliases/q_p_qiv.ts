
/**
 * Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
 * - Z = Zero quarters in noncompliance.
 * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
 * - GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
 */
export type q_p_qiv = Query<"0" | "GT1" | "GT2" | "GT4" | "GT8" | "12", "p_qiv">;

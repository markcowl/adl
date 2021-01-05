
/**
 * Filter Results by Media.
 * - M = RMP (Risk Management Plan)
 * - R = RCRA (Hazardous Waste)
 * - S = SDWA (Public Drinking Water Systems)
 * - W = Water
 * - ALL = Water and RCRA and SDWA
 */
export type q_p_med = Query<"M" | "R" | "S" | "W" | "ALL", "p_med">;

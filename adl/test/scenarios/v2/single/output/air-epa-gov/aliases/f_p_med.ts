
/**
 * Filter Results by Media.
 * - M = RMP (Risk Management Plan)
 * - R = RCRA (Hazardous Waste)
 * - S = SDWA (Public Drinking Water Systems)
 * - W = Water
 * - ALL = Water and RCRA and SDWA
 */
export type f_p_med = FormData<"M" | "R" | "S" | "W" | "ALL", "p_med">;

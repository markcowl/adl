
/**
 * Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
 * - E = EPA
 * - S = State
 */
export type q_p_ysla = Query<"E" | "S" | "A", "p_ysla">;


/**
 * Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
 * - W = within date range
 * - N = not within date range
 */
export type f_p_iea = FormData<"W" | "N", "p_iea">;

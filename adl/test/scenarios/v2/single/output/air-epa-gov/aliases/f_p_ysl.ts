
/**
 * Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
 * - W = within date range
 * - N = not within date range
 */
export type f_p_ysl = FormData<"W" | "N" | "NV", "p_ysl">;

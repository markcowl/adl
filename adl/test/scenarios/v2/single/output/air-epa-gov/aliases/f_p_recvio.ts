
/**
 * Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
 * - NO VIOL = Selects facilities with no recent violations.
 * - ANY HPV = Selects facilities with either addressed or unaddressed high priority violations.
 * - ADDRS-EPA - Select facilities with recent EPA addressed violations.
 * - ADDRS-LOCAL - Select facilities with recent locally addressed violations.
 * - ADDRS-STATE - Select facilities with recent state addressed violations.
 * - UNADDR-EPA - Select facilities with recent EPA unaddressed violations.
 * - UNADDR-LOCAL - Select facilities with recent locally unaddressed violations.
 * - UNADDR-STATE - Select facilities with recent state unaddressed violations.
 * - FRV VIOL = Selects facilities with a recent federally reportable violation without a high priority violation.
 */
export type f_p_recvio = FormData<string, "p_recvio">;

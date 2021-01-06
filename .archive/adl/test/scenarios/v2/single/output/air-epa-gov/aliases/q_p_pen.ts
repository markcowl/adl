
/**
 * Last Penality Date Qualifier Filter.  Enter one of the following:
 * - NEVER = No Penalties
 * - ANY = Any Penalty
 * - LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. "LE5" for a facility with a penalty within previous 5 months.
 * - GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago.
 */
export type q_p_pen = Query<string, "p_pen">;

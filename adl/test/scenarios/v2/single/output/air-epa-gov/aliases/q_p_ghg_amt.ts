
/** Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number. */
export type q_p_ghg_amt = Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000", "p_ghg_amt">;

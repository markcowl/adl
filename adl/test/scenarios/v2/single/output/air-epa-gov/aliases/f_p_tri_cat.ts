
/**
 * Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
 * - TOTAL = Total Released to Air
 * - CARC = Total Carcinogens Released to Air
 * - HAP = Total Hazardous Air Pollutants Released to Air
 */
export type f_p_tri_cat = FormData<"TOTAL" | "CARC" | "HAP", "p_tri_cat">;

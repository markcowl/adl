
/** Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount. */
export type q_p_ghg_cat = Query<"ALL" | "BIOCO2" | "CH4" | "CO2" | "HFC" | "N2O" | "NF3" | "OTHER_L" | "PFC" | "SF6", "p_ghg_cat">;

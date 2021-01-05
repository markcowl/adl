
/** National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.  */
export type q_p_nei_amt = Query<"None" | "0" | "GT0" | "GT10000" | "GT25000" | "GT250000" | "GT1000000", "p_nei_amt">;

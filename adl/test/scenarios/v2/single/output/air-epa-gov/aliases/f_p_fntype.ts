
/**
 * Controls type of text search performed on facility name with parameter p_fn.
 * - EXACT = Find facilities having the exact provided name(s).
 * - BEGINS = Find facilities with names starting with the provided term(s).
 * - ALL = Find facilities using Oracle text search terms.
 * - CONTAINS =
 */
export type f_p_fntype = FormData<"ALL" | "CONTAINS" | "EXACT" | "BEGINS", "p_fntype">;

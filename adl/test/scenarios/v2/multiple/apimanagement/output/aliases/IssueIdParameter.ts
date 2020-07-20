
/** Issue identifier. Must be unique in the current API Management service instance. */
export type IssueIdParameter = Path<string & MaxLength<256> & MinLength<1> & RegularExpression<"^[^*#&+:<>?]+$">, "issueId">;

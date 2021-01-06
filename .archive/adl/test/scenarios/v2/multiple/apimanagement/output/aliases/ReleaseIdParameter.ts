
/** Release identifier within an API. Must be unique in the current API Management service instance. */
export type ReleaseIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<"^[^*#&+:<>?]+$">, "releaseId">;

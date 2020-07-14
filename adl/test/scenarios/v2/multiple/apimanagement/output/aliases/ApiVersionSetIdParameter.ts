
/** Api Version Set identifier. Must be unique in the current API Management service instance. */
export type ApiVersionSetIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<"^[^*#&+:<>?]+$">, "versionSetId">;

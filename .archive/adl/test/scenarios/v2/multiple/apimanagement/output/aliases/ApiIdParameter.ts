
/** API identifier. Must be unique in the current API Management service instance. */
export type ApiIdParameter = Path<string & MaxLength<80> & MinLength<1>, "apiId">;

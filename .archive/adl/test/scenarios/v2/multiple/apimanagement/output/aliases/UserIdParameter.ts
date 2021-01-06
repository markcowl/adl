
/** User identifier. Must be unique in the current API Management service instance. */
export type UserIdParameter = Path<string & MaxLength<80> & MinLength<1>, "userId">;


/** Identifier of the authorization server. */
export type AuthenticationServerIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<'^[^*#&+:<>?]+$'>, "authsid">;

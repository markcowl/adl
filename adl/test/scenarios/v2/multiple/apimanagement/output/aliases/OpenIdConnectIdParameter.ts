
/** Identifier of the OpenID Connect Provider. */
export type OpenIdConnectIdParameter = Path<string & MaxLength<256> & RegularExpression<'^[^*#&+:<>?]+$'>, "opid">;

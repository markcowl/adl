
/** API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. */
export type ApiIdRevParameter = Path<string & MaxLength<256> & MinLength<1> & RegularExpression<'^[^*#&+:<>?]+$'>, "apiId">;

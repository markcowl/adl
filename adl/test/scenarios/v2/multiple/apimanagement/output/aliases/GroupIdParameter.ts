
/** Group identifier. Must be unique in the current API Management service instance. */
export type GroupIdParameter = Path<string & MaxLength<256> & MinLength<1>, "groupId">;


/** Identifier of the Backend entity. Must be unique in the current API Management service instance. */
export type BackendIdParameter = Path<string & MaxLength<80> & MinLength<1>, "backendId">;


/** Operation identifier within an API. Must be unique in the current API Management service instance. */
export type OperationIdParameter = Path<string & MaxLength<80> & MinLength<1>, "operationId">;

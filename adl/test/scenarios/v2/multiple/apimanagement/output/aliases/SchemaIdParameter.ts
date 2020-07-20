
/** Schema identifier within an API. Must be unique in the current API Management service instance. */
export type SchemaIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<"^[^*#&+:<>?]+$">, "schemaId">;

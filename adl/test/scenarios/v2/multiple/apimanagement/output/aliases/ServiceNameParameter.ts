
/** The name of the API Management service. */
export type ServiceNameParameter = Path<string & MaxLength<50> & MinLength<1> & RegularExpression<"^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$">, "serviceName">;

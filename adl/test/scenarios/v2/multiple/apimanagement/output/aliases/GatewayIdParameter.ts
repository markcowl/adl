
/** Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed' */
export type GatewayIdParameter = Path<string & MaxLength<80> & MinLength<1>, "gatewayId">;

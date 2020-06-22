
/** Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway entity. */
export type GatewayHostnameConfigurationIdParameter = Path<string & MaxLength<80> & MinLength<1>, "hcId">;


/** Logger identifier. Must be unique in the API Management service instance. */
export type LoggerIdParameter = Path<string & MaxLength<256> & RegularExpression<'^[^*#&+:<>?]+$'>, "loggerId">;

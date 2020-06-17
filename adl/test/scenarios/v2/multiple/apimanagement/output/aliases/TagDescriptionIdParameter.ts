
/** Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names. */
export type TagDescriptionIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<'^[^*#&+:<>?]+$'>, "tagDescriptionId">;

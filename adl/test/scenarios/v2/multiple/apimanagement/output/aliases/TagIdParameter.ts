
/** Tag identifier. Must be unique in the current API Management service instance. */
export type TagIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<'^[^*#&+:<>?]+$'>, "tagId">;

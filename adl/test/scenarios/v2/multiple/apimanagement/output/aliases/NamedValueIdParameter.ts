
/** Identifier of the NamedValue. */
export type NamedValueIdParameter = Path<string & MaxLength<256> & RegularExpression<'^[^*#&+:<>?]+$'>, "namedValueId">;

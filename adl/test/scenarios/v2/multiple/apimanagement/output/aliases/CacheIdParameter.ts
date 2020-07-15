
/** Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier). */
export type CacheIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<"^[^*#&+:<>?]+$">, "cacheId">;

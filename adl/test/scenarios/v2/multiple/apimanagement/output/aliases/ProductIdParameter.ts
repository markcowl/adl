
/** Product identifier. Must be unique in the current API Management service instance. */
export type ProductIdParameter = Path<string & MaxLength<256> & MinLength<1>, "productId">;

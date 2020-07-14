
/** Comment identifier within an Issue. Must be unique in the current Issue. */
export type CommentIdParameter = Path<string & MaxLength<256> & MinLength<1> & RegularExpression<"^[^*#&+:<>?]+$">, "commentId">;

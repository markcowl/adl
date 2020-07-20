
/**
 *
 * @description The Twitter handle (screen name) of this user.
 */
export type UserName = string & RegularExpression<"^[A-Za-z0-9_]{1,15}$">;

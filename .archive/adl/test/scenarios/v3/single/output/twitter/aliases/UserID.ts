
/**
 *
 * @description Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
 */
export type UserID = string & RegularExpression<"^[0-9]{1,19}$">;

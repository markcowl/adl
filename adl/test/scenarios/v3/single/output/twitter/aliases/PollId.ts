
/**
 *
 * @description Unique identifier of this poll.
 */
export type PollId = string & RegularExpression<"^[0-9]{1,19}$">;

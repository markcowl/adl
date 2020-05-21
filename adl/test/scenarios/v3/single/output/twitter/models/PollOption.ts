
/**
 * @description Describes a choice in a Poll object.
 */
export interface PollOption {
    /**
     * @description The text of a poll choice.
     */
    label?: string;
    /**
     * @description Position of this choice in the poll.
     */
    position?: int64;
    /**
     * @description Number of users who voted for this choice.
     */
    votes?: int64;
}

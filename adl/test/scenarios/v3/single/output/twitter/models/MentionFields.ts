
/**
 * @description Represent the portion of text recognized as a User mention, and its start and end position within the text.
 * @since 2.3
 */
export interface MentionFields {
    /**
     * @since 2.3
     */
    username?: string & RegularExpression<"^[A-Za-z0-9_]{1,15}$">;
}

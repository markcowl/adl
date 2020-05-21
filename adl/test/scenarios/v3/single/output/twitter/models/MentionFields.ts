
/**
 * @description Represent the portion of text recognized as a User mention, and its start and end position within the text.
 */
export interface MentionFields {
    username?: string & RegularExpression<"^[A-Za-z0-9_]{1,15}$">;
}


/**
 * @description Specifies the type of attachments (if any) present in this Tweet.
 */
export interface model_27 {
    /**
     * @description A list of Media Keys for each one of the media attachments (if media are attached).
     */
    media_keys: Array<string & RegularExpression<"^([0-9]+)_([0-9]+)$">> & MinimumElements<1>;
    /**
     * @description A list of poll IDs (if polls are attached).
     */
    poll_ids: Array<string & RegularExpression<"^[0-9]{1,19}$">> & MinimumElements<1>;
}

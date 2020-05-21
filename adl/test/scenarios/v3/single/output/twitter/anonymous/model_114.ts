export interface model_114 {
    /**
     * @description Most recent Tweet Id returned by search query
     */
    newest_id: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @description This value is used to get the next 'page' of results by providing it to the next_token parameter.
     */
    next_token: string;
    /**
     * @description Oldest Tweet Id returned by search query
     */
    oldest_id: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @description Number of search query results
     */
    result_count: int32;
}

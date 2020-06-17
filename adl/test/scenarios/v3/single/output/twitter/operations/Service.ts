export interface Service {
    /**
     * Returns the open api spec document.
     * @description Full open api spec in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
     * @since 2.3
     * @http GET /labs/2/openapi.json
     * @tag General
     * @return 200|application/json - The request was successful
     */
    getOpenApiSpec(): [(code: 200, mediaType: "application/json") => {
        body: string;
    }];
    /**
     * Returns hydrated Tweet objects
     * @description Returns a variety of information about the Tweet specified by the requested ID
     * @since 2.3
     * @http GET /labs/2/tweets
     * @tag Tweets
     * @param ids - A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.
     * @return 200|application/json - The request was successful
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    findTweetsById(ids: Query<Array<TweetID> & MaximumElements<100> & MinimumElements<1>>, expansions?: TweetExpansionsParameter, tweet_fields?: TweetFieldsParameter, user_fields?: UserFieldsParameter, media_fields?: MediaFieldsParameter, place_fields?: PlaceFieldsParameter, poll_fields?: PollFieldsParameter): [(code: 200, mediaType: "application/json") => {
        body: TweetLookupResponse;
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
    /**
     * Returns Tweets from the last 7 days that match a search query.
     * @description Returns Tweets from the last 7 days that match a search query.
     * @since 2.3
     * @http GET /labs/2/tweets/search
     * @tag Search
     * @tag Tweets
     * @param query - One query/rule/filter for matching Tweets. Up to 512 characters.
     * @param start_time - YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
     * @param end_time - YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
     * @param since_id - Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
     * @param until_id - Returns results with a Tweet ID less than (that is, older than) the specified ID.
     * @param max_results - The maximum number of search results to be returned by a request.
     * @param next_token - This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * @return 200|application/json - Tweets recent search response
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    tweetsRecentSearch(query: Query<string & MaxLength<512> & MinLength<1>>, start_time?: Query<dateTime>, end_time?: Query<dateTime>, since_id?: Query<TweetID>, until_id?: Query<TweetID>, max_results?: Query<int32 /* todo: add defaultValue '10' */ & Minimum<10> & Maximum<100>>, next_token?: Query<string>, expansions?: TweetExpansionsParameter, tweet_fields?: TweetFieldsParameter, user_fields?: UserFieldsParameter, media_fields?: MediaFieldsParameter, place_fields?: PlaceFieldsParameter, poll_fields?: PollFieldsParameter): [(code: 200, mediaType: "application/json") => {
        body: TweetSearchResponse;
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
    /**
     * Returns hydrated Tweet objects
     * @description Returns a variety of information about the Tweet specified by the requested ID
     * @since 2.3
     * @http GET /labs/2/tweets/{id}
     * @tag Tweets
     * @param id - A single Tweet ID.
     * @return 200|application/json - The request was successful
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    findTweetById(id: TweetID, expansions?: TweetExpansionsParameter, tweet_fields?: TweetFieldsParameter, user_fields?: UserFieldsParameter, media_fields?: MediaFieldsParameter, place_fields?: PlaceFieldsParameter, poll_fields?: PollFieldsParameter): [(code: 200, mediaType: "application/json") => {
        body: SingleTweetLookupResponse;
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
    /**
     * Hides a reply to an owned conversation.
     * @description Tweet ID in the path is that of the reply to hide.
     * @since 2.3
     * @http PUT /labs/2/tweets/{id}/hidden
     * @tag Tweets
     * @param id - The ID of the reply that you want to hide.
     * @return 200|application/json - A successful response. The reply has been hidden.
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    hideReplyById(id: TweetID, body?: Body<{
        /**
         *
         * @since 2.3
         */
        hidden?: true;
    }, 'application/json'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 2.3
             */
            data?: {
                /**
                 *
                 * @since 2.3
                 */
                hidden?: true;
            };
        };
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
    /**
     * Return details for the specified users
     * @description This endpoint returns information about users. Specify users by their ID.
     * @since 2.3
     * @http GET /labs/2/users
     * @tag Users
     * @param ids - Required. A list of User IDs, comma-separated. You can specify up to 100 IDs.
     * @return 200|application/json - The request was successful
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    findUsersById(ids: Query<Array<UserID> & MaximumElements<100> & MinimumElements<1>>, expansions?: UserExpansionsParameter, tweet_fields?: TweetFieldsParameter, user_fields?: UserFieldsParameter, media_fields?: MediaFieldsParameter, place_fields?: PlaceFieldsParameter, poll_fields?: PollFieldsParameter): [(code: 200, mediaType: "application/json") => {
        body: UserLookupResponse;
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
    /**
     * Return details for the specified users
     * @description This endpoint returns information about users. Specify users by their username.
     * @since 2.3
     * @http GET /labs/2/users/by
     * @tag Users
     * @param usernames - Required . A list of usernames, comma-separated. You can specify up to 100 usernames.
     * @return 200|application/json - The request was successful
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    findUsersByUsername(usernames: Query<Array<UserName> & MaximumElements<100> & MinimumElements<1>>, expansions?: UserExpansionsParameter, tweet_fields?: TweetFieldsParameter, user_fields?: UserFieldsParameter, media_fields?: MediaFieldsParameter, place_fields?: PlaceFieldsParameter, poll_fields?: PollFieldsParameter): [(code: 200, mediaType: "application/json") => {
        body: UserLookupResponse;
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
    /**
     * Return details for the specified users
     * @description This endpoint returns information about a user. Specify user by username.
     * @since 2.3
     * @http GET /labs/2/users/by/username/{username}
     * @tag Users
     * @param username - Required. A username.
     * @return 200|application/json - The request was successful
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    findUserByUsername(username: UserName, expansions?: UserExpansionsParameter, tweet_fields?: TweetFieldsParameter, user_fields?: UserFieldsParameter, media_fields?: MediaFieldsParameter, place_fields?: PlaceFieldsParameter, poll_fields?: PollFieldsParameter): [(code: 200, mediaType: "application/json") => {
        body: SingleUserLookupResponse;
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
    /**
     * Return details for the specified users
     * @description This endpoint returns information about a user. Specify user by ID.
     * @since 2.3
     * @http GET /labs/2/users/{id}
     * @tag Users
     * @param id - Required. A User ID.
     * @return 200|application/json - The request was successful
     * @return HttpErrorResponse|application/json - The request has failed.
     * @return HttpErrorResponse|application/problem+json - The request has failed.
     */
    findUserById(id: UserID, expansions?: UserExpansionsParameter, tweet_fields?: TweetFieldsParameter, user_fields?: UserFieldsParameter, media_fields?: MediaFieldsParameter, place_fields?: PlaceFieldsParameter, poll_fields?: PollFieldsParameter): [(code: 200, mediaType: "application/json") => {
        body: SingleUserLookupResponse;
    }, (code: "HttpErrorResponse", mediaType: "application/json") => {
        body: Error;
    }, (code: "HttpErrorResponse", mediaType: "application/problem+json") => {
        body: Problem;
    }];
}

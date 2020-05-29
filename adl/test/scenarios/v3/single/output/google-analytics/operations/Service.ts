export interface Service {
    /**
     * @description Returns Analytics report data for a view (profile).
     * @http GET /data
     * @tag data
     * @since v2.4
     */
    'analytics.data.get'(_0?: Http.Query<"atom", 'alt'>, _1?: Http.Query<string, 'fields'>, _2?: Http.Query<string, 'key'>, _3?: Http.Query<string, 'oauth_token'>, _4?: Http.Query<boolean, 'prettyPrint'>, _5?: Http.Query<string, 'quotaUser'>, _6?: Http.Query<string, 'userIp'>, ids: Http.Query<string>, start_date: Http.Query<string, 'start-date'>, end_date: Http.Query<string, 'end-date'>, metrics: Http.Query<string>, dimensions?: Http.Query<string>, filters?: Http.Query<string>, max_results?: Http.Query<int64, 'max-results'>, segment?: Http.Query<string>, sort?: Http.Query<string>, start_index?: Http.Query<int64 & Minimum<1>, 'start-index'>);
    /**
     * @description Lists all accounts to which the user has access.
     * @http GET /management/accounts
     * @tag management
     * @since v2.4
     */
    'analytics.management.accounts.list'(_0?: Http.Query<"atom", 'alt'>, _1?: Http.Query<string, 'fields'>, _2?: Http.Query<string, 'key'>, _3?: Http.Query<string, 'oauth_token'>, _4?: Http.Query<boolean, 'prettyPrint'>, _5?: Http.Query<string, 'quotaUser'>, _6?: Http.Query<string, 'userIp'>, max_results?: Http.Query<int64, 'max-results'>, start_index?: Http.Query<int64 & Minimum<1>, 'start-index'>);
    /**
     * @description Lists web properties to which the user has access.
     * @http GET /management/accounts/{accountId}/webproperties
     * @tag management
     * @since v2.4
     */
    'analytics.management.webproperties.list'(_0?: Http.Query<"atom", 'alt'>, _1?: Http.Query<string, 'fields'>, _2?: Http.Query<string, 'key'>, _3?: Http.Query<string, 'oauth_token'>, _4?: Http.Query<boolean, 'prettyPrint'>, _5?: Http.Query<string, 'quotaUser'>, _6?: Http.Query<string, 'userIp'>, accountId: Http.Path<string>, max_results?: Http.Query<int64, 'max-results'>, start_index?: Http.Query<int64 & Minimum<1>, 'start-index'>);
    /**
     * @description Lists views (profiles) to which the user has access.
     * @http GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
     * @tag management
     * @since v2.4
     */
    'analytics.management.profiles.list'(_0?: Http.Query<"atom", 'alt'>, _1?: Http.Query<string, 'fields'>, _2?: Http.Query<string, 'key'>, _3?: Http.Query<string, 'oauth_token'>, _4?: Http.Query<boolean, 'prettyPrint'>, _5?: Http.Query<string, 'quotaUser'>, _6?: Http.Query<string, 'userIp'>, accountId: Http.Path<string>, webPropertyId: Http.Path<string>, max_results?: Http.Query<int64, 'max-results'>, start_index?: Http.Query<int64 & Minimum<1>, 'start-index'>);
    /**
     * @description Lists goals to which the user has access.
     * @http GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
     * @tag management
     * @since v2.4
     */
    'analytics.management.goals.list'(_0?: Http.Query<"atom", 'alt'>, _1?: Http.Query<string, 'fields'>, _2?: Http.Query<string, 'key'>, _3?: Http.Query<string, 'oauth_token'>, _4?: Http.Query<boolean, 'prettyPrint'>, _5?: Http.Query<string, 'quotaUser'>, _6?: Http.Query<string, 'userIp'>, accountId: Http.Path<string>, webPropertyId: Http.Path<string>, profileId: Http.Path<string>, max_results?: Http.Query<int64, 'max-results'>, start_index?: Http.Query<int64 & Minimum<1>, 'start-index'>);
    /**
     * @description Lists advanced segments to which the user has access.
     * @http GET /management/segments
     * @tag management
     * @since v2.4
     */
    'analytics.management.segments.list'(_0?: Http.Query<"atom", 'alt'>, _1?: Http.Query<string, 'fields'>, _2?: Http.Query<string, 'key'>, _3?: Http.Query<string, 'oauth_token'>, _4?: Http.Query<boolean, 'prettyPrint'>, _5?: Http.Query<string, 'quotaUser'>, _6?: Http.Query<string, 'userIp'>, max_results?: Http.Query<int64, 'max-results'>, start_index?: Http.Query<int64 & Minimum<1>, 'start-index'>);
}

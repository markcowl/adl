import { Tweet } from './Tweet';
import { Expansions } from './Expansions';
/**
 * @since 2.3
 */
export interface TweetSearchResponse {
    /**
     * @since 2.3
     */
    data: Array<Tweet> & MinimumElements<1>;
    /**
     * @since 2.3
     */
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    /**
     * @since 2.3
     */
    includes: Expansions;
    /**
     * @since 2.3
     */
    meta: {
        /** @since 2.3 */
        newest_id: string & RegularExpression<"^[0-9]{1,19}$">;
        /** @since 2.3 */
        next_token: string;
        /** @since 2.3 */
        oldest_id: string & RegularExpression<"^[0-9]{1,19}$">;
        /** @since 2.3 */
        result_count: int32;
    };
}

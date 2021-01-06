import { Tweet } from "./Tweet";
import { Problem } from "../aliases/Problem";
import { Expansions } from "./Expansions";
/**
 *
 * @since 2.3
 */
export interface TweetSearchResponse {
    /**
     *
     * @since 2.3
     */
    data?: Array<Tweet> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    errors?: Array<Problem> & MinimumElements<1>;
    /**
     *
     * @since 2.3
     */
    includes?: Expansions;
    /**
     *
     * @since 2.3
     */
    meta?: {
        newest_id?: string & RegularExpression<"^[0-9]{1,19}$">;
        next_token?: string;
        oldest_id?: string & RegularExpression<"^[0-9]{1,19}$">;
        result_count?: int32;
    };
}

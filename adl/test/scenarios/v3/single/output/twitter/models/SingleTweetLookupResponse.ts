import { Tweet } from './Tweet';
import { Expansions } from './Expansions';
/**
 * @since 2.3
 */
export interface SingleTweetLookupResponse {
    /**
     * @since 2.3
     */
    data: Tweet;
    /**
     * @since 2.3
     */
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    /**
     * @since 2.3
     */
    includes: Expansions;
}

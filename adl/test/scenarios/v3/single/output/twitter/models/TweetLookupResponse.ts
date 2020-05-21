import { Tweet } from './Tweet';
import { Expansions } from './Expansions';
export interface TweetLookupResponse {
    data: Array<Tweet> & MinimumElements<1>;
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    includes: Expansions;
}

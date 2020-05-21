import { Expansions } from './Expansions';
import { Tweet } from './Tweet';
export interface TweetLookupResponse {
    data: Array<Tweet> & MinimumElements<1>;
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    includes: Expansions;
}

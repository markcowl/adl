import { Tweet } from './Tweet';
import { Expansions } from './Expansions';
export interface SingleTweetLookupResponse {
    data: Tweet;
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    includes: Expansions;
}

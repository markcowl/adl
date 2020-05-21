import { Expansions } from './Expansions';
import { Tweet } from './Tweet';
export interface SingleTweetLookupResponse {
    data: Tweet;
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    includes: Expansions;
}

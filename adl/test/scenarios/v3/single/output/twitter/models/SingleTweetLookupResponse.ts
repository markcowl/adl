import { Expansions } from './Expansions';
import { Tweet } from './Tweet';
export interface SingleTweetLookupResponse {
    data: Tweet;
    errors: unknown /*= (not tsschema -- undefinederrors/undefined ) =*/;
    includes: Expansions;
}

import { Expansions } from './Expansions';
import { Tweet } from './Tweet';
export interface SingleTweetLookupResponse {
    data: Tweet;
    errors: any;
    includes: Expansions;
}

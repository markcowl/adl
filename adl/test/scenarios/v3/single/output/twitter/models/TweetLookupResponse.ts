import { Expansions } from './Expansions';
export interface TweetLookupResponse {
    data: any;
    errors: any;
    includes: Expansions;
}

import { Expansions } from './Expansions';
export interface TweetLookupResponse {
    data: unknown /*= (not tsschema -- undefineddata/undefined ) =*/;
    errors: unknown /*= (not tsschema -- undefinederrors/undefined ) =*/;
    includes: Expansions;
}

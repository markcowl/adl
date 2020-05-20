import { Expansions } from './Expansions';
export interface UserLookupResponse {
    data: unknown /*= (not tsschema -- undefineddata/undefined ) =*/;
    errors: unknown /*= (not tsschema -- undefinederrors/undefined ) =*/;
    includes: Expansions;
}

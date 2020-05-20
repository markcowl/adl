import { Expansions } from './Expansions';
import { User } from './User';
export interface SingleUserLookupResponse {
    data: User;
    errors: unknown /*= (not tsschema -- undefinederrors/undefined ) =*/;
    includes: Expansions;
}

import { User } from './User';
import { Expansions } from './Expansions';
export interface UserLookupResponse {
    data: Array<User> & MinimumElements<1>;
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    includes: Expansions;
}

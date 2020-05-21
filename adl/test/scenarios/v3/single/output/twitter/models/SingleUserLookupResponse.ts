import { User } from './User';
import { Expansions } from './Expansions';
export interface SingleUserLookupResponse {
    data: User;
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    includes: Expansions;
}

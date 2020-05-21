import { Expansions } from './Expansions';
import { User } from './User';
export interface SingleUserLookupResponse {
    data: User;
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    includes: Expansions;
}

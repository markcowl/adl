import { User } from './User';
import { Expansions } from './Expansions';
/**
 * @since 2.3
 */
export interface UserLookupResponse {
    /**
     * @since 2.3
     */
    data: Array<User> & MinimumElements<1>;
    /**
     * @since 2.3
     */
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    /**
     * @since 2.3
     */
    includes: Expansions;
}

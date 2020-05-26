import { User } from './User';
import { Expansions } from './Expansions';
/**
 * @since 2.3
 */
export interface SingleUserLookupResponse {
    /**
     * @since 2.3
     */
    data: User;
    /**
     * @since 2.3
     */
    errors: Array<unknown /*= (not tsschema -- undefinedProblem/undefined ) =*/> & MinimumElements<1>;
    /**
     * @since 2.3
     */
    includes: Expansions;
}

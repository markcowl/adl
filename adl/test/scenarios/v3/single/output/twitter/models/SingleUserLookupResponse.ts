import { Expansions } from './Expansions';
import { User } from './User';
export interface SingleUserLookupResponse {
    data: User;
    errors: any;
    includes: Expansions;
}

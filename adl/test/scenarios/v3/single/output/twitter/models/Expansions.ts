import { Place } from './Place';
import { Poll } from './Poll';
import { Tweet } from './Tweet';
import { User } from './User';
export interface Expansions {
    media: Array<unknown /*= (not tsschema -- undefinedMedia/undefined ) =*/> & MinimumElements<1>;
    places: Array<Place> & MinimumElements<1>;
    polls: Array<Poll> & MinimumElements<1>;
    tweets: Array<Tweet> & MinimumElements<1>;
    users: Array<User> & MinimumElements<1>;
}

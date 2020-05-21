import { PollOption } from './PollOption';
/**
 * @description Represent a Poll attached to a Tweet
 */
export interface Poll {
    duration_minutes: int64;
    end_datetime: dateTime;
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    options?: Array<PollOption> & MaximumElements<4> & MinimumElements<2>;
    voting_status: "open" | "closed";
}

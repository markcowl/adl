import { PollOption } from './PollOption';
/** @since 2.3 */
export interface Poll {
    /**
     * @since 2.3
     */
    duration_minutes: int64;
    /**
     * @since 2.3
     */
    end_datetime: dateTime;
    /**
     * @since 2.3
     */
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @since 2.3
     */
    options?: Array<PollOption> & MaximumElements<4> & MinimumElements<2>;
    /**
     * @since 2.3
     */
    voting_status: "open" | "closed";
}

import { FeedbackValue } from '../enums/FeedbackValue';
/** @since 2018-11-25 */
export interface Problem {
    /** @since 2018-11-25 */
    Id: string & MaxLength<38> & MinLength<38> & RegularExpression<"p-[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}">;
    /** @since 2018-11-25 */
    Title: string;
    /** @since 2018-11-25 */
    Insights: string;
    /** @since 2018-11-25 */
    Status: Status;
    /** @since 2018-11-25 */
    AffectedResource: string;
    /** @since 2018-11-25 */
    StartTime: dateTime;
    /** @since 2018-11-25 */
    EndTime: dateTime;
    /** @since 2018-11-25 */
    SeverityLevel: SeverityLevel;
    /** @since 2018-11-25 */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    Feedback: Dictionary<FeedbackValue> & MaximumProperties<10>;
}

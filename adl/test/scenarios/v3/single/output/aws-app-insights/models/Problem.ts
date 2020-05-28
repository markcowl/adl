import { FeedbackValue } from '../enums/FeedbackValue';
/**
 * @description Describes a problem that is detected by correlating observations.
 * @since 2018-11-25
 */
export interface Problem {
    /**
     * @description The ID of the problem.
     * @since 2018-11-25
     */
    Id: string & MaxLength<38> & MinLength<38> & RegularExpression<"p-[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}">;
    /**
     * @description The name of the problem.
     * @since 2018-11-25
     */
    Title: string;
    /**
     * @description A detailed analysis of the problem using machine learning.
     * @since 2018-11-25
     */
    Insights: string;
    /**
     * @description The status of the problem.
     * @since 2018-11-25
     */
    Status: Status;
    /**
     * @description The resource affected by the problem.
     * @since 2018-11-25
     */
    AffectedResource: string;
    /**
     * @description The time when the problem started, in epoch seconds.
     * @since 2018-11-25
     */
    StartTime: dateTime;
    /**
     * @description The time when the problem ended, in epoch seconds.
     * @since 2018-11-25
     */
    EndTime: dateTime;
    /**
     * @description A measure of the level of impact of the problem.
     * @since 2018-11-25
     */
    SeverityLevel: SeverityLevel;
    /**
     * @description The name of the resource group affected by the problem.
     * @since 2018-11-25
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description Feedback provided by the user about the problem.
     * @since 2018-11-25
     */
    Feedback: Dictionary<FeedbackValue> & MaximumProperties<10>;
}

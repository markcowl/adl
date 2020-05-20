import { SeverityLevel } from '../SeverityLevel';
import { Status } from '../Status';
/**
 * @description Describes a problem that is detected by correlating observations.
 */
export interface Problem {
    /**
     * @description The ID of the problem.
     */
    Id: any;
    /**
     * @description The name of the problem.
     */
    Title: any;
    /**
     * @description A detailed analysis of the problem using machine learning.
     */
    Insights: any;
    /**
     * @description The status of the problem.
     */
    Status: Status;
    /**
     * @description The resource affected by the problem.
     */
    AffectedResource: any;
    /**
     * @description The time when the problem started, in epoch seconds.
     */
    StartTime: any;
    /**
     * @description The time when the problem ended, in epoch seconds.
     */
    EndTime: any;
    /**
     * @description A measure of the level of impact of the problem.
     */
    SeverityLevel: SeverityLevel;
    /**
     * @description The name of the resource group affected by the problem.
     */
    ResourceGroupName: any;
    /**
     * @description Feedback provided by the user about the problem.
     */
    Feedback: any;
}

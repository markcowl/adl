import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates your client is forbidden from making this request.
 */
export interface ClientForbiddenProblem extends ProblemFields {
    reason: any;
    registration_url: any;
    type: any;
}

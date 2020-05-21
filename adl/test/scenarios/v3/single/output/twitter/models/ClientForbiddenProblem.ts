import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates your client is forbidden from making this request.
 */
export interface ClientForbiddenProblem extends ProblemFields {
    reason: "official-client-forbidden" | "client-not-enrolled";
    registration_url: string;
    type: "https://api.twitter.com/labs/2/problems/client-forbidden";
}

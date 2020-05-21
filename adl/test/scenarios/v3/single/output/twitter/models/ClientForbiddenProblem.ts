import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates your client is forbidden from making this request.
 */
export interface ClientForbiddenProblem extends ProblemFields {
    reason: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    registration_url: string;
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

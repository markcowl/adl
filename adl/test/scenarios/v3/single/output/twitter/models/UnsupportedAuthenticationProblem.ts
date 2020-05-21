import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that the authentication used is not supported.
 */
export interface UnsupportedAuthenticationProblem extends ProblemFields {
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

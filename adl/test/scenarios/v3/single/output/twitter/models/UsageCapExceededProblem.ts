import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that a usage cap has been exceeded.
 */
export interface UsageCapExceededProblem extends ProblemFields {
    period: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    scope: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

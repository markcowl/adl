import { ProblemFields } from './ProblemFields';
/**
 * @description A generic problem with no additional information beyond that provided by the HTTP status code.
 */
export interface GenericProblem extends ProblemFields {
    status?: int64;
    type: "about:blank";
}

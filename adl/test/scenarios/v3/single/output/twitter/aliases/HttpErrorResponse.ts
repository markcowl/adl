
/** The request has failed. */
export type HttpErrorResponse<Code = undefined, IsException = false> = [(code: Code, mediaType: "application/json") => {
    body: Error;
    isException: IsException;
}, (code: Code, mediaType: "application/problem+json") => {
    body: Problem;
    isException: IsException;
}];

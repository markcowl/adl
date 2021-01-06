
/** A string response */
export type StringResponse<Code = undefined, IsException = false, MediaType = undefined> = (code: Code, mediaType: MediaType) => {
    body: string;
    isException: IsException;
};

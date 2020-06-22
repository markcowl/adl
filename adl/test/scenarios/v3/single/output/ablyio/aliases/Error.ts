
/** Error */
export type Error<Code = undefined, IsException = false> = [(code: Code, mediaType: "application/json") => {
    body: Error;
    headers: [ErrorCode<"x-ably-errorcode">, ErrorMessage<"x-ably-errormessage">, ServerId<"x-ably-serverid">];
    isException: IsException;
}, (code: Code, mediaType: "application/x-msgpack") => {
    body: Error;
    headers: [ErrorCode<"x-ably-errorcode">, ErrorMessage<"x-ably-errormessage">, ServerId<"x-ably-serverid">];
    isException: IsException;
}, (code: Code, mediaType: "text/html") => {
    body: Error;
    headers: [ErrorCode<"x-ably-errorcode">, ErrorMessage<"x-ably-errormessage">, ServerId<"x-ably-serverid">];
    isException: IsException;
}];

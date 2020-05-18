
/**
 * @description Sets correlation protocol to use for Application Insights diagnostics.
 * @extensible
 */
export enum HttpCorrelationProtocol {
    /** Do not read and inject correlation headers. */
    None = 'None',
    /** Inject Request-Id and Request-Context headers with request correlation data. See https://github.com/dotnet/corefx/blob/master/src/System.Diagnostics.DiagnosticSource/src/HttpCorrelationProtocol.md. */
    Legacy = 'Legacy',
    /** Inject Trace Context headers. See https://w3c.github.io/trace-context. */
    W3C = 'W3C'
}

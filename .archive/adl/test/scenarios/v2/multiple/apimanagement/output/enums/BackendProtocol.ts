
/**
 * @extensible
 * @description Backend communication protocol.
 * @since 2019-12-01
 */
export enum BackendProtocol {
    /** The Backend is a RESTful service. */
    http = "http",
    /** The Backend is a SOAP service. */
    soap = "soap"
}

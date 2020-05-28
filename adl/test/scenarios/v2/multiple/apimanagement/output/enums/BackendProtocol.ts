
/**
 * @extensible
 * @description Backend communication protocol.
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
export enum BackendProtocol {
    /** The Backend is a RESTful service. */
    http = 'http',
    /** The Backend is a SOAP service. */
    soap = 'soap'
}

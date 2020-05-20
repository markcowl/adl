
/**
 * @description Backend communication protocol.
 * @extensible
 */
/** @todo-temporary-reuse-marker */
export enum BackendProtocol {
    /**
     * The Backend is a RESTful service.
     */
    http = 'http',
    /**
     * The Backend is a SOAP service.
     */
    soap = 'soap'
}

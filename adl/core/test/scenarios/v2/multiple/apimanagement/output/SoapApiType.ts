
/**
 * 
 * @description Type of Api to create.
 *  * `http` creates a SOAP to REST API
 *  * `soap` creates a SOAP pass-through API .
 * @extensible
 */
export enum SoapApiType {
    /** Imports a SOAP API having a RESTful front end. */
    SoapToRest = 'http',
    /** Imports the Soap API having a SOAP front end. */
    SoapPassThrough = 'soap'
}


/**
 * @description Returned error from failed REST.
 */
export interface Error {
    /**
     * @description Error code.
     */
    code: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Link to help with error.
     */
    href: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Message explaining the error's cause.
     */
    message: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Server ID with which error was encountered.
     */
    serverId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Status error code.
     */
    statusCode: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

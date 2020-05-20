
/**
 * @description Details of the Backend WebProxy Server to use in the Request to Backend.
 */
export interface BackendProxyContract {
    /**
     * @description WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
     */
    url?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Username to connect to the WebProxy server
     */
    username: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Password to connect to the WebProxy Server
     */
    password: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

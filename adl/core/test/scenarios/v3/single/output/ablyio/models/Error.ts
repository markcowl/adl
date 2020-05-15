
/**
 * 
 * @description Returned error from failed REST.
 */
export interface Error {
    /**
     * 
     * @description Error code.
     */
    code: any;
    /**
     * 
     * @description Link to help with error.
     */
    href: any;
    /**
     * 
     * @description Message explaining the error's cause.
     */
    message: any;
    /**
     * 
     * @description Server ID with which error was encountered.
     */
    serverId: any;
    /**
     * 
     * @description Status error code.
     */
    statusCode: any;
}

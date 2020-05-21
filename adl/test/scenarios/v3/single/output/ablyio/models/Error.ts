
/**
 * @description Returned error from failed REST.
 */
export interface Error {
    /**
     * @description Error code.
     */
    code: int64;
    /**
     * @description Link to help with error.
     */
    href: string;
    /**
     * @description Message explaining the error's cause.
     */
    message: string;
    /**
     * @description Server ID with which error was encountered.
     */
    serverId: string;
    /**
     * @description Status error code.
     */
    statusCode: int64;
}

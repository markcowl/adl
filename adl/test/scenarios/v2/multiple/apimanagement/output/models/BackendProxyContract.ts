
/**
 * @description Details of the Backend WebProxy Server to use in the Request to Backend.
 */
export interface BackendProxyContract {
    /**
     * @description WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings.
     */
    url?: string & MaxLength<2000> & MinLength<1>;
    /**
     * @description Username to connect to the WebProxy server
     */
    username: string;
    /**
     * @description Password to connect to the WebProxy Server
     */
    password: string;
}

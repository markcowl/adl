export interface commitCommentBody {
    body?: any;
    /**
     * 
     * @description Deprecated - Use position parameter instead.
     */
    line: any;
    /**
     * 
     * @description Line number in the file to comment on. Defaults to null.
     */
    number: any;
    /**
     * 
     * @description Relative path of the file to comment on.
     */
    path: any;
    /**
     * 
     * @description Line index in the diff to comment on.
     */
    position: any;
    /**
     * 
     * @description SHA of the commit to comment on.
     */
    sha?: any;
}

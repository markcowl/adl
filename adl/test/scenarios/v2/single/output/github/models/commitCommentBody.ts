export interface commitCommentBody {
    body?: string;
    /**
     * @description Deprecated - Use position parameter instead.
     */
    line: string;
    /**
     * @description Line number in the file to comment on. Defaults to null.
     */
    number: string;
    /**
     * @description Relative path of the file to comment on.
     */
    path: string;
    /**
     * @description Line index in the diff to comment on.
     */
    position: int64;
    /**
     * @description SHA of the commit to comment on.
     */
    sha?: string;
}

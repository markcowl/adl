export interface commitCommentBody {
    body?: string;
    /**
     * @description Deprecated - Use position parameter instead.
     */
    line: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Line number in the file to comment on. Defaults to null.
     */
    number: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Relative path of the file to comment on.
     */
    path: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Line index in the diff to comment on.
     */
    position: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description SHA of the commit to comment on.
     */
    sha?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

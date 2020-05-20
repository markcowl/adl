
/**
 * @description Paged Logger list representation.
 */
export interface LoggerCollection {
    /**
     * @description Logger values.
     */
    value: unknown /*= (not tsschema -- undefinedvalue/undefined ) =*/;
    /**
     * @description Total record count number across all pages.
     */
    count: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Next page link if any.
     */
    nextLink: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}

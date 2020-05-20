
/**
 * @description Paged Report records list representation.
 */
export interface ReportCollection {
    /**
     * @description Page values.
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

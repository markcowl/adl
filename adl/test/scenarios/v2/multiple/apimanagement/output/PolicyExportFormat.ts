
/**
 * @description Policy Export Format.
 * @extensible
 */
export enum PolicyExportFormat {
    /** The contents are inline and Content type is an XML document. */
    xml = 'xml',
    /** The contents are inline and Content type is a non XML encoded policy document. */
    rawxml = 'rawxml'
}
